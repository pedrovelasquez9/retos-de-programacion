## Reto de programación #9 - Contador de promedio de vocales.

### Enunciado

Se desea implementar una función que, dada una frase (un string de entrada), realice las siguientes operaciones:

- Contar la cantidad de vocales (a, e, i, o, u) presentes en la frase, sin distinguir entre mayúsculas y minúsculas.

- Calcular el promedio de aparición de cada vocal. **El promedio de cada vocal se define como el número de veces que aparece esa vocal dividido entre el número total de vocales presentes en la frase.**

La función debe devolver un objeto donde las claves son las vocales (a, e, i, o, u) y los valores son los promedios de aparición correspondientes. Si una vocal no está presente en la frase, su valor debe ser 0.

**Restricciones:**

- La función debe ser insensible a mayúsculas y minúsculas.
- Los caracteres que no son vocales deben ser ignorados en el conteo y en los cálculos de promedios.

### Reto adicional

**Agregar testing al programa/script**

### Resultado esperado

Entrada: **"Esta es una prueba"**

Salida Esperada:

{
"a": 0.375,
"e": 0.375,
"i": 0,
"o": 0,
"u": 0.25,
}

#### Explicación

En la frase "Esta es una prueba", las vocales aparecen en las siguientes cantidades:

a aparece 3 veces.
e aparece 3 veces.
u aparece 2 veces.
i y o no aparecen en la frase.
El total de vocales es 3 (a) + 3 (e) + 2 (u) = 8.

Por lo tanto, los promedios de aparición son:

a: 3/8 ≈ 0.375
e: 3/8 ≈ 0.375
u: 2/8 ≈ 0.25
i: 0/8 = 0
o: 0/8 = 0

### Subir mi solución

Si quieres subir tu solución al repositorio de la comunidad, sigue las instrucciones que encontrarás en el [readme del repositorio](https://github.com/pedrovelasquez9/retos-de-programacion)
