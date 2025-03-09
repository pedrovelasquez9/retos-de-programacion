def fibonacci(num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        return fibonacci(num - 1) + fibonacci(num - 2)


if __name__ == "__main__":
    for i in range(10):
        print(fibonacci(i))
