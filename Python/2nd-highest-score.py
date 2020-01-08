if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))

sorted_list = sorted(arr, reverse=True)

highest = sorted_list[0]
second = highest
i=1

while second == highest:
    if sorted_list[i] < highest:
        second=sorted_list[i]
    else:
        i+=1

print(second)
