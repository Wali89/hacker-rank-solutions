def appendAndDelete(s, t, k):

    for ops_left in reversed(range(1, k + 1)):
        if s == t[:len(s)] and len(t) - len(s) == ops_left or len(s) == 0:
            break
        s = s[:-1]
