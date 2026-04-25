# Explicação do código `num_primos.py`

O arquivo `num_primos.py` contém uma função principal chamada `eh_primo`, que verifica se um número inteiro é primo.

## Como o código foi organizado

- `eh_primo(numero: int) -> bool`
  - Recebe um número inteiro e retorna `True` quando ele é primo.
  - Trata casos especiais primeiro: números menores ou iguais a 1, 2 e 3, e números pares.

- `possui_divisor_impar(numero: int) -> bool`
  - Verifica se existe um divisor ímpar de `numero` maior que 1.
  - Testa apenas divisores ímpares até a raiz quadrada de `numero`, o que melhora desempenho.

- `main() -> None`
  - Define uma lista de exemplos e imprime, para cada número, se ele é primo.

## Detalhes da lógica

1. Números menores ou iguais a 1 não são primos.
2. 2 e 3 são primos.
3. Números pares maiores que 2 não são primos.
4. Se nenhum divisor ímpar for encontrado até a raiz quadrada do número, então ele é primo.

## Exemplo de execução

Quando o arquivo é executado diretamente, o bloco abaixo chama `main()`:

```python
if __name__ == '__main__':
    main()
```

Isso imprime o resultado para cada número da lista de exemplos.

## Vantagens desse estilo

- O código está dividido em funções pequenas e com responsabilidade única.
- Os nomes das funções e variáveis deixam o propósito claro.
- A verificação de primos é eficiente pela inspeção apenas de divisores ímpares até a raiz quadrada.
