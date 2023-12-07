using StatisticsCalculator;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace StatisticsCalculatorTests
{
    public class GetMedianaUnitTests
    {
        /*
         Enunciado
 Escribir un programa que implemente una calculadora de estadísticas básicas para una lista de números. Deberás proporcionar funciones que calculen la media, la mediana y la moda de una lista de números.

 A continuación, se detalla cómo calcular cada una de estas estadísticas:

 Media (Promedio):
 La media aritmética es el promedio de todos los números en la lista. Para calcularla, sumarás todos los números en la lista y dividirás esa suma por la cantidad total de números en la lista.

 Mediana:
 La mediana es el valor que se encuentra en el medio de la lista cuando los números están ordenados de menor a mayor. Para calcularla, primero ordenarás la lista y luego, si la cantidad de números en la lista es impar, tomarás el valor en el medio. Si la cantidad es par, tomarás el promedio de los dos valores del medio.

 Moda:
 La moda es el valor (o valores) que más se repite en la lista. Para calcularla, contarás cuántas veces aparece cada número en la lista y encontrarás el número o números que tienen la mayor frecuencia de aparición.

 Reto adicional
 Agregar testing al programa/script

 Resultado esperado
 Partiendo de una lista/array inicial:

 const numberList = [1, 2, 3, 4, 5];

 Si llamo a la función getMedia(numberList), el resultado esperado, según los cálculos explicados, debe ser 3.

 Si llamo a la función getMediana(numberList), el resultado esperado, según los cálculos explicados, debe ser 3.

 Si llamo a la función getModa(numberList), el resultado esperado, según los cálculos explicados, debe ser [1,2,3,4,5] dado que ningún valor se repite más de una vez.


        Tests getMedia

        [1, 2, 3, 4, 5] -> 3
        [1, 2] -> 3/2
        [1] -> 1
        [] or null -> argument exception
         */



        [Test]
        public void GetMediana_WhenCalledNullValue_ReturnException()
        {
            Assert.Throws<ArgumentNullException>(() => StatiticsCaluculator.GetMediana(null));
        }

        [Test]
        public void GetMediana_WhenCalledEmptyList_ReturnException()
        {
            List<int> numbers = new List<int>();

            Assert.Throws<ArgumentOutOfRangeException>(() => StatiticsCaluculator.GetMediana(numbers));
        }

        [TestCase]
        public void GetMediana_WhenCalled_ReturnCorrectValue()
        {
            List<int> numbers = new List<int>() { 1 };

            int expectValue = 1;
            Assert.That(StatiticsCaluculator.GetMediana(numbers), Is.EqualTo(expectValue));

            numbers = new List<int>() { 1, 3 };
            expectValue = 2;
            Assert.That(StatiticsCaluculator.GetMediana(numbers), Is.EqualTo(expectValue));
            
            numbers = new List<int>() { 1, 2, 3, 4, 5 };
            expectValue = 3;
            Assert.That(StatiticsCaluculator.GetMediana(numbers), Is.EqualTo(expectValue));
           
            numbers = new List<int>() { 0, 1, 3, 2, 1, 1, 0, 0 };
            expectValue = 1;
            Assert.That(StatiticsCaluculator.GetMediana(numbers), Is.EqualTo(expectValue));

            numbers = new List<int>() { 15, 8, 12, 5 };
            expectValue = 10;
            Assert.That(StatiticsCaluculator.GetMediana(numbers), Is.EqualTo(expectValue));

            numbers = new List<int>() { 1, 2 };
            expectValue = 1;
            Assert.That(StatiticsCaluculator.GetMediana(numbers), Is.EqualTo(expectValue));


        }

    }
}