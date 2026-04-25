def eh_primo(numero: int) -> bool:
    """Retorna True se o número for primo, caso contrário False."""
    if numero <= 1:
        return False
    if numero <= 3:
        return True
    if numero % 2 == 0:
        return False
    return not possui_divisor_impar(numero)


def possui_divisor_impar(numero: int) -> bool:
    limite = int(numero ** 0.5)
    for divisor in range(3, limite + 1, 2):
        if numero % divisor == 0:
            return True
    return False


def main() -> None:
    exemplos = [1, 2, 3, 4, 17, 18, 19, 20]
    for numero in exemplos:
        resultado = eh_primo(numero)
        print(f'{numero}: {resultado}')


if __name__ == '__main__':
    main()
