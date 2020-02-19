def saveThePrisoner(n, m, s):
    a= s+m-1
    if a>n:
        if a%n == 0:
            return n
        return a%n

    return a
