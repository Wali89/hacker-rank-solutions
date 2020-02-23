def circularArrayRotation(a, k, queries):
    from collections import deque 
    items = deque(a) 
    items.rotate(k)
    ret_list = []
    for q in queries:
        #print(items[q])
        ret_list.append(items[q])
    return ret_list
