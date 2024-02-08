
def fib(n):
    buffer = [0, 1]
    if n == 0 or n == 1:
        return 1
    else:
        for i in range (0, n+1):
            if i == 0:
                pass
            else:
                result = buffer[0] + buffer[1]
                if i%2 == 0:
                    buffer[0] = result
                else:
                    buffer[1] = result
                yield result
