def lines_from_stdin(n):
    n = int(n)
    for i in range(n):
        yield input().rstrip('\n').split()

def matching_lines(lines, patterns):
    for line in lines:
        for pattern in patterns:
            if pattern in line:
                yield line

def matching_lines_from_stdin(pattern, n):
    lines = lines_from_stdin(n)
    matching = matching_lines(lines, pattern)
    yield from matching

def map_list_commands(n):
    answer = list()
    funcs = dir(list) + ['print']
    matching = matching_lines_from_stdin(funcs, n)
    for vals in matching:
        func = vals[0]
        if func in dir(list):
            try:
                val1, val2 = int(vals[1]), int(vals[2])
                method = getattr(answer, func)(val1, val2)
            except IndexError:
                try:
                    val1 = int(vals[1])
                    method = getattr(answer, func)(val1)
                except IndexError:
                    method = getattr(answer, func)()
        elif func == 'print':
            print(answer)

if __name__ == '__main__':
    N = int(input())
    map_list_commands(N)
