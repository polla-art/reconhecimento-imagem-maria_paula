def calcular_estatisticas(valores: list[int]) -> tuple[float, float, int, int]:
    """Retorna a soma, média, maior e menor valor da lista."""
    if not valores:
        raise ValueError("A lista de valores não pode estar vazia.")

    total = sum(valores)
    media = total / len(valores)
    maior = max(valores)
    menor = min(valores)

    return total, media, maior, menor


def exibir_estatisticas(valores: list[int]) -> None:
    """Calcula e imprime as estatísticas de uma lista de números."""
    total, media, maior, menor = calcular_estatisticas(valores)
    print(f"total: {total}")
    print(f"media: {media}")
    print(f"maior: {maior}")
    print(f"menor: {menor}")


def main() -> None:
    numeros = [23, 7, 45, 2, 67, 12, 89, 34, 56, 11]
    exibir_estatisticas(numeros)


if __name__ == '__main__':
    main()
