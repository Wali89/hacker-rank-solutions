def beautifulDays(i, j, k):
    
    ans = 0
    def reverse(n):
        rev =0
        while(n>0):
            dig=n%10
            rev=rev*10+dig
            n=n//10
        return rev
    
    for l in range(i,j):
        
        if (l -reverse(l))%k ==0:
            ans+=1
    return ans
