n = int(input())
# read input integers as strings
string_list = map(str, input().split())

# create tuple by evaluating the joined string
# list, enclosed in parantheses
tuple = eval("(" + ", ".join(string_list) + ")")
print(hash(tuple))