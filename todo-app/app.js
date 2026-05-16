// app.js

// Mock do DB usando localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Elementos de UI
const appContainer = document.getElementById('app');
const loginScreen = document.getElementById('login-screen');
const registerScreen = document.getElementById('register-screen');
const dashboardScreen = document.getElementById('dashboard-screen');

// Inicialização
function init() {
    if (currentUser) {
        showDashboard();
    } else {
        showLogin();
    }
}

// Controle de Telas
function showLogin() {
    dashboardScreen.classList.replace('flex', 'hidden');
    registerScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
    
    appContainer.classList.remove('max-w-5xl');
    appContainer.classList.add('max-w-md');
}

function showRegister() {
    dashboardScreen.classList.replace('flex', 'hidden');
    loginScreen.classList.add('hidden');
    registerScreen.classList.remove('hidden');
    
    appContainer.classList.remove('max-w-5xl');
    appContainer.classList.add('max-w-md');
}

function showDashboard() {
    loginScreen.classList.add('hidden');
    registerScreen.classList.add('hidden');
    dashboardScreen.classList.replace('hidden', 'flex');
    
    appContainer.classList.remove('max-w-md');
    appContainer.classList.add('max-w-5xl');
    
    document.getElementById('greeting').textContent = `Olá, ${currentUser.name}`;
    renderTodos();
}

// Navegação entre Login/Cadastro
document.getElementById('go-to-register').addEventListener('click', (e) => {
    e.preventDefault();
    clearErrors();
    document.getElementById('login-form').reset();
    showRegister();
});

document.getElementById('go-to-login').addEventListener('click', (e) => {
    e.preventDefault();
    clearErrors();
    document.getElementById('register-form').reset();
    showLogin();
});

// Utilitário para limpar erros
function clearErrors() {
    const errorEls = document.querySelectorAll('[id$="-error"]');
    errorEls.forEach(el => el.classList.add('hidden'));
}

// Fluxo de Cadastro
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    
    let hasError = false;
    
    if (!name) {
        document.getElementById('register-name-error').classList.remove('hidden');
        hasError = true;
    }
    if (!email) {
        document.getElementById('register-email-error').classList.remove('hidden');
        hasError = true;
    }
    if (!password) {
        document.getElementById('register-password-error').classList.remove('hidden');
        hasError = true;
    }
    
    if (hasError) return;

    if (users.some(u => u.email === email)) {
        document.getElementById('register-error').classList.remove('hidden');
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    e.target.reset();
    showDashboard();
});

// Fluxo de Login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    
    let hasError = false;
    
    if (!email) {
        document.getElementById('login-email-error').classList.remove('hidden');
        hasError = true;
    }
    if (!password) {
        document.getElementById('login-password-error').classList.remove('hidden');
        hasError = true;
    }
    
    if (hasError) return;

    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        document.getElementById('login-error').classList.remove('hidden');
        return;
    }

    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    e.target.reset();
    showDashboard();
});

// Fluxo de Logout
document.getElementById('logout-btn').addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showLogin();
});

// Criação de Tarefas
document.getElementById('todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('todo-title').value.trim();
    const type = document.getElementById('todo-type').value;
    const description = document.getElementById('todo-desc').value.trim();
    const errorMsg = document.getElementById('todo-title-error');
    
    if (!title) {
        errorMsg.classList.remove('hidden');
        return;
    }
    errorMsg.classList.add('hidden');

    const newTodo = {
        id: Date.now(),
        userId: currentUser.email,
        title,
        type,
        description,
        done: false
    };

    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    
    e.target.reset();
    renderTodos();
});

// Concluir Tarefa
window.completeTodo = function(id) {
    todos = todos.map(t => t.id === id ? { ...t, done: true } : t);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
};

// Renderização das Tarefas
function renderTodos() {
    const list = document.getElementById('todos-list');
    list.innerHTML = '';

    const userTodos = todos.filter(t => t.userId === currentUser.email);
    
    if (userTodos.length === 0) {
        list.innerHTML = `
            <div class="h-full flex items-center justify-center min-h-[200px]">
                <p class="text-slate-400 text-center italic">Nenhuma tarefa cadastrada ainda.</p>
            </div>
        `;
        return;
    }

    // Ordenar: pendentes primeiro, concluídas depois
    userTodos.sort((a, b) => {
        if (a.done === b.done) return b.id - a.id; 
        return a.done ? 1 : -1;
    });

    userTodos.forEach(todo => {
        const div = document.createElement('div');
        const isDone = todo.done;
        
        div.className = `p-4 rounded-xl bg-slate-800/40 border transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-slate-800/60 
            ${isDone ? 'border-slate-700/50 opacity-60' : 'border-slate-700 shadow-md'}`;
        
        let typeBadge = '';
        if (todo.type === 'Trabalho') {
            typeBadge = 'bg-blue-500/10 text-blue-400 border-blue-500/20';
        } else if (todo.type === 'Pessoal') {
            typeBadge = 'bg-purple-500/10 text-purple-400 border-purple-500/20';
        } else if (todo.type === 'Estudos') {
            typeBadge = 'bg-green-500/10 text-green-400 border-green-500/20';
        }

        div.innerHTML = `
            <div class="flex-1 w-full">
                <div class="flex items-center flex-wrap gap-2 mb-2">
                    <h3 class="font-semibold text-base ${isDone ? 'line-through text-slate-500' : 'text-slate-200'}">${todo.title}</h3>
                    <span class="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${typeBadge}">
                        ${todo.type}
                    </span>
                </div>
                ${todo.description ? `<p class="text-sm mt-1 leading-relaxed ${isDone ? 'text-slate-600 line-through' : 'text-slate-400'}">${todo.description}</p>` : ''}
            </div>
            
            ${!isDone ? `
                <button onclick="completeTodo(${todo.id})" class="px-4 py-2 bg-slate-700 hover:bg-emerald-600/90 hover:text-white rounded-lg text-sm font-medium transition-colors shrink-0 w-full sm:w-auto text-slate-300">
                    Concluir
                </button>
            ` : `
                <div class="px-3 py-1.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-lg text-sm font-medium shrink-0 flex items-center justify-center gap-2 w-full sm:w-auto">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    Concluída
                </div>
            `}
        `;
        list.appendChild(div);
    });
}

// Inicializar aplicação
init();
