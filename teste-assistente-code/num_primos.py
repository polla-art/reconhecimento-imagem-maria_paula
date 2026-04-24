def eh_primo(n):
    """Retorna True se n for primo, caso contrário False."""
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0:
        return False
    limite = int(n**0.5)
    for i in range(3, limite + 1, 2):
        if n % i == 0:
            return False
    return True

if __name__ == '__main__':
    for numero in [1, 2, 3, 4, 17, 18, 19, 20]:
        print(f'{numero}: {eh_primo(numero)}')
