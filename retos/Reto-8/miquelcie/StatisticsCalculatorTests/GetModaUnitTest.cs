using StatisticsCalculator;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace StatisticsCalculatorTests
{
    public class GetModaUnitTests
    {
        /*
         Enunciado
 Escribir un programa que implemente una calculadora de estadísticas básicas para una lista de números. Deberás proporcionar funciones que calculen la media, la mediana y la moda de una lista de números.

 Moda:
 La moda es el valor (o valores) que más se repite en la lista. Para calcularla, contarás cuántas veces aparece cada número en la lista y encontrarás el número o números que tienen la mayor frecuencia de aparición.

 Reto adicional
 Agregar testing al programa/script

 Resultado esperado
 Partiendo de una lista/array inicial:

 const numberList = [1, 2, 3, 4, 5];

 Si llamo a la función getModa(numberList), el resultado esperado, según los cálculos explicados, debe ser [1,2,3,4,5] dado que ningún valor se repite más de una vez.


        Tests getModa

        [1, 2, 3, 4, 5] -> [1, 2, 3, 4, 5]
        [1, 2, 1] -> 1
        [0, 0, 1] -> 0
        [1] -> 1
        [] or null -> argument exception
         */



        [Test]
        public void GetModa_WhenCalledNullValue_ReturnException()
        {
            Assert.Throws<ArgumentNullException>(() => StatiticsCaluculator.GetModa(null));
        }

        [Test]
        public void GetModa_WhenCalledEmptyList_ReturnException()
        {
            List<int> numbers = new List<int>();

            Assert.Throws<ArgumentOutOfRangeException>(() => StatiticsCaluculator.GetModa(numbers));
        }

        [TestCase]
        public void GetModa_WhenCalled_ReturnCorrectValue()
        {
            List<int> numbers = new List<int>() { 1 };

            List<int> expectValue = new List<int>() { 1 };
            Assert.That(StatiticsCaluculator.GetModa(numbers), Is.EqualTo(expectValue));

            numbers = new List<int>() { 1, 3 };
            expectValue = new List<int>() { 1, 3 };
            Assert.That(StatiticsCaluculator.GetModa(numbers), Is.EqualTo(expectValue));
            
            numbers = new List<int>() { 1, 2, 3, 4, 5 };
            expectValue = new List<int>() { 1, 2, 3, 4, 5 };
            Assert.That(StatiticsCaluculator.GetModa(numbers), Is.EqualTo(expectValue));

            numbers = new List<int>() { 0, 1, 3, 2, 1, 1, 0, 0 };
            expectValue = new List<int>() { 0, 1 };
            Assert.That(StatiticsCaluculator.GetModa(numbers), Is.EqualTo(expectValue));

            numbers = new List<int>() { 5, 5, 8, 12, 15 };
            expectValue = new List<int>() { 5 };
            Assert.That(StatiticsCaluculator.GetModa(numbers), Is.EqualTo(expectValue));

            numbers = new List<int>() { 5, 5, 8,8,9,9,9, 12, 15 };
            expectValue = new List<int>() { 9 };
            Assert.That(StatiticsCaluculator.GetModa(numbers), Is.EqualTo(expectValue));


        }

    }
}