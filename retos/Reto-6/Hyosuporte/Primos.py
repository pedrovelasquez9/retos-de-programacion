limit =  int(input("Ingrese un numero hasta donde quiere sacar la lista de primos : "))

#Validacion del numero de que no sea 0 ni negativo
if limit == 0 :
    print("El numero no puede ser 0")
elif limit < 0 :
    print("El numero no puede ser negativo, sera convertido automaticamente en positivo")
    limit * -1

#Generacion de los numeros primos
lisPrimos = []
for i in range(1,limit+1):
    count = 0
    for j in range(1,i+1):
        if (i%j) == 0 :
            count+=1
    if count == 2 :
        lisPrimos.append(i)

print(lisPrimos)