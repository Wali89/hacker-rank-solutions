def viralAdvertising(n):

    m = 2
    tot = 2

    for _ in range(1, n):
        m += m>>1
        tot += m
    return tot
