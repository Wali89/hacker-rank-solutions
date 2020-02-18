def angryProfessor(k, a):
    time = 0
    arrival = a
    for i in range(len(arrival)):
        if arrival[i] <= 0:
            time+=1
    
    if time<k:
        return("YES")
    else:
        return("NO")
