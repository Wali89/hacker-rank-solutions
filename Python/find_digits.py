def findDigits(n):
    ans = 0
    split = list(str(n))
    result = list(map(int, split))
    for i in result:
        if i > 0:
            if n%i==0:
                ans+=1
    return ans
