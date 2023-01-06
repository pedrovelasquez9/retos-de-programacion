# Enunciado
# Con el lenguaje de programación de tu preferencia, realiza una función que calcule n iteraciones de la secuencia de Fibonacci, siendo n un número recibido como parámetro de la función, cumpliendo con los siguientes criterios:

# Si n es 0 o 1, la función deberá retornar 1
# Si n es mayor a 1, deberá retornar la cantidad de iteraciones de la secuencia
# Puedes usar cualquier estructura de datos que veas conveniente
# Puedes usar cualquier estructura de control que veas conveniente, por ejemplo, ciclos, recursividad, etc.



# Forma iterativa
print('------- Forma iterativa ------')

def fib(n):
    a = 0
    b = 1

    for k in range(n):
        c = a + b
        a = b
        b = c
    return b
for k in range(20):
    print(fib(k))

print('')


# Forma Recursiva
print('------- Forma recursiva ------')
def fib_r(n):
    if n < 2:
        return n
    return fib_r(n-1) + fib_r(n-2)

for x in range(20):
    print(fib_r(x))
print('')