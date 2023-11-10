## Reto de programación #8 - Calculadora de Estadísticas.

### Enunciado

Escribir un programa que implemente una calculadora de estadísticas básicas para una lista de números. Deberás proporcionar funciones que calculen la media, la mediana y la moda de una lista de números.

**A continuación, se detalla cómo calcular cada una de estas estadísticas:**

- **Media (Promedio):**

La media aritmética es el promedio de todos los números en la lista. Para calcularla, sumarás todos los números en la lista y dividirás esa suma por la cantidad total de números en la lista.

- **Mediana:**

La mediana es el valor que se encuentra en el medio de la lista cuando los números están ordenados de menor a mayor. Para calcularla, primero ordenarás la lista y luego, si la cantidad de números en la lista es impar, tomarás el valor en el medio. Si la cantidad es par, tomarás el promedio de los dos valores del medio.

- **Moda:**

La moda es el valor (o valores) que más se repite en la lista. Para calcularla, contarás cuántas veces aparece cada número en la lista y encontrarás el número o números que tienen la mayor frecuencia de aparición.

### Reto adicional

**Agregar testing al programa/script**

### Resultado esperado

Partiendo de una lista/array inicial:

**const numberList = [1, 2, 3, 4, 5];**

Si llamo a la función **getMedia(numberList)**, el resultado esperado, según los cálculos explicados, debe ser 3.

Si llamo a la función **getMediana(numberList)**, el resultado esperado, según los cálculos explicados, debe ser 3.

Si llamo a la función **getModa(numberList)**, el resultado esperado, según los cálculos explicados, debe ser [1,2,3,4,5] dado que ningún valor se repite más de una vez.

### Subir mi solución

Si quieres subir tu solución al repositorio de la comunidad, sigue las instrucciones que encontrarás en el [readme del repositorio](https://github.com/pedrovelasquez9/retos-de-programacion)
