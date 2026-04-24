# Explicação do código `num_primos.py`

O arquivo `num_primos.py` define a função `eh_primo(n)`, que verifica se um número inteiro `n` é primo.

## Como a função funciona

1. `if n <= 1:`
   - Números menores ou iguais a 1 não são primos.
   - A função retorna `False` nesses casos.

2. `if n <= 3:`
   - Os números 2 e 3 são primos.
   - A função retorna `True` diretamente para esses valores.

3. `if n % 2 == 0:`
   - Se `n` é divisível por 2 e não é 2, então não é primo.
   - A função retorna `False` para todos os pares maiores que 2.

4. `limite = int(n**0.5)`
   - Um número composto sempre tem um divisor menor ou igual à raiz quadrada dele.
   - Dessa forma, só precisamos testar divisores até essa raiz, o que melhora a eficiência.

5. `for i in range(3, limite + 1, 2):`
   - Esse laço testa apenas números ímpares, pulando os pares.
   - Começa em 3 e vai até o valor de `limite`.

6. `if n % i == 0:`
   - Se `n` for divisível por algum `i`, então não é primo.
   - A função retorna `False` imediatamente.

7. `return True`
   - Se nenhum divisor for encontrado, `n` é primo e a função retorna `True`.

## Exemplo de execução

No final do arquivo, há um bloco:

```python
if __name__ == '__main__':
    for numero in [1, 2, 3, 4, 17, 18, 19, 20]:
        print(f'{numero}: {eh_primo(numero)}')
```

- Esse bloco só é executado quando o arquivo é rodado diretamente.
- Ele testa alguns números e imprime se cada um deles é primo (`True`) ou não (`False`).

## Resumo

- A função `eh_primo` trata casos especiais primeiro (`<= 1`, `2`, `3`, e pares).
- Depois faz uma verificação eficiente até a raiz quadrada do número.
- O código é simples e funciona para verificar se um inteiro positivo é primo.
