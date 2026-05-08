# Reconhecimento de Imagem - Maria Paula

Este projeto demonstra um sistema de reconhecimento de imagem utilizando a biblioteca Teachable Machine do Google, integrado com uma interface web simples. Além disso, inclui uma pasta com exemplos de código Python para testes e aprendizado de conceitos básicos de programação.

## Descrição

O projeto principal consiste em uma aplicação web que utiliza machine learning para classificar imagens em tempo real através da webcam do usuário. A interface é construída com HTML, CSS e JavaScript, utilizando Bootstrap para o design responsivo.

A pasta `teste-assistente-code` contém exemplos práticos de código Python, incluindo:
- Verificação de números primos
- Cálculo de estatísticas básicas (soma, média, máximo, mínimo)
- Correção e debug de código com erros comuns

## Funcionalidades

### Aplicação Principal (index.html)
- Captura de imagem via webcam
- Classificação em tempo real usando modelo Teachable Machine
- Interface responsiva e moderna
- Exibição de probabilidades de classificação

### Exemplos de Código (teste-assistente-code/)
- `num_primos.py`: Função para verificar se um número é primo
- `refatoracao.py`: Cálculo de estatísticas de uma lista de números
- `debug.py`: Exemplo de código corrigido para cálculo de total de compras
- Arquivos de explicação detalhada para cada código

## Estrutura do Projeto

```
reconhecimento-imagem-maria_paula/
├── index.html                    # Interface principal da aplicação
├── teste-assistente-code/
│   ├── debug.py                  # Código corrigido para cálculo de compras
│   ├── explicacao_debug.md       # Explicação dos erros e correções
│   ├── explicacao_num_primo.md   # Explicação do algoritmo de números primos
│   ├── explicacao_refatoracao.md # Explicação linha a linha do código refatorado
│   ├── num_primos.py             # Implementação da verificação de primos
│   └── refatoracao.py            # Código refatorado para estatísticas
└── README.md                     # Este arquivo
```

## Tecnologias Utilizadas

- **HTML5/CSS3**: Estrutura e estilização da interface
- **JavaScript**: Lógica da aplicação e integração com Teachable Machine
- **Bootstrap 5**: Framework CSS para design responsivo
- **Teachable Machine**: Biblioteca de machine learning para classificação de imagens
- **Python 3**: Linguagem para os exemplos de código

## Como Executar

### Aplicação Web
1. Abra o arquivo `index.html` em um navegador web moderno
2. Permita o acesso à câmera quando solicitado
3. Treine um modelo no [Teachable Machine](https://teachablemachine.withgoogle.com/) e exporte o modelo
4. Substitua o link do modelo no código JavaScript
5. A aplicação irá classificar imagens em tempo real

### Exemplos Python
Para executar os exemplos Python, certifique-se de ter Python 3 instalado:

```bash
# Verificação de números primos
python teste-assistente-code/num_primos.py

# Cálculo de estatísticas
python teste-assistente-code/refatoracao.py

# Cálculo de total de compras (interativo)
python teste-assistente-code/debug.py
```

## Requisitos

- Navegador web com suporte a WebRTC (Chrome, Firefox, Edge)
- Acesso à câmera
- Python 3 (opcional, para executar os exemplos)

## Aprendizados

Este projeto demonstra conceitos importantes de:
- Desenvolvimento web front-end
- Machine learning aplicado
- Boas práticas de programação Python
- Debug e refatoração de código
- Algoritmos básicos de matemática

## Contribuição

Sinta-se à vontade para contribuir com melhorias no código ou adicionar novos exemplos!

## Licença

Este projeto é para fins educacionais.</content>
<parameter name="filePath">c:\Users\MARIAPAULAFIRMINODAS\reconhecimento-imagem-maria_paula\README.md