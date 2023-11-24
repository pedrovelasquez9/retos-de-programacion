namespace StatisticsCalculator
{
    public class StatiticsCaluculator
    {
        /// <summary>
        ///  La media aritmética es el promedio de todos los números en la lista. Para calcularla, sumarás todos los números en la lista y dividirás esa suma por la cantidad total de números en la lista.
        /// </summary>
        /// <param name="numbers"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentNullException"></exception>
        /// <exception cref="ArgumentOutOfRangeException"></exception>
        public static int GetMedia(List<int> numbers)
        {
            if (numbers==null)
                throw new ArgumentNullException("La lista de números no pude ser nula");

            if (numbers.Count==0)
                throw new ArgumentOutOfRangeException("La lista no puede estar vacía");

           return numbers.Sum() / numbers.Count;            

        }
        /// <summary>
        ///  La mediana es el valor que se encuentra en el medio de la lista cuando los números están ordenados de menor a mayor. Para calcularla, primero ordenarás la lista y luego, si la cantidad de números en la lista es impar, tomarás el valor en el medio. Si la cantidad es par, tomarás el promedio de los dos valores del medio.
        /// </summary>
        /// <param name="numbers"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentNullException"></exception>
        /// <exception cref="ArgumentOutOfRangeException"></exception>
        public static int GetMediana(List<int> numbers)
        {

            if (numbers == null)
                throw new ArgumentNullException("La lista de números no pude ser nula");

            if (numbers.Count == 0)
                throw new ArgumentOutOfRangeException("La lista no puede estar vacía");

            List<int> numbersOrdered = numbers.Order().ToList();
            int mitad = numbersOrdered.Count / 2;
            
            if (numbersOrdered.Count % 2 == 0)
            {
                return (numbersOrdered[mitad - 1] + numbersOrdered[mitad]) / 2;
            }
            
            return numbersOrdered[mitad];
            
        }

        /// <summary>
        /// La moda es el valor (o valores) que más se repite en la lista. Para calcularla, contarás cuántas veces aparece cada número en la lista y encontrará el número o números que tienen la mayor frecuencia de aparición.
        /// </summary>
        /// <param name="numbers"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentNullException"></exception>
        /// <exception cref="ArgumentOutOfRangeException"></exception>
        public static List<int> GetModa(List<int> numbers)
        {
            if (numbers == null)
                throw new ArgumentNullException("La lista de números no pude ser nula");

            if (numbers.Count == 0)
                throw new ArgumentOutOfRangeException("La lista no puede estar vacía");

            
            List<int> moda = new List<int>();

            int max = 0;
            foreach(int number in numbers)
            {
                int numRepetited = numbers.Count(x => x == number);
                if (numRepetited > max)
                {
                    max = numRepetited;
                    moda.Clear();
                    moda.Add(number);
                }
                else if (numRepetited == max && !moda.Contains(number))
                {
                    moda.Add(number);
                }
            }

            return moda;
        }
    }
}