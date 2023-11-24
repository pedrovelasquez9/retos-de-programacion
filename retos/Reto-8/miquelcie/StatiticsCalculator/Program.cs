
using StatisticsCalculator;

Console.Write($"Introduce la cantidad de números: ");
int cantidad = Convert.ToInt32(Console.ReadLine());

List<int> numbers = new List<int>();
for (int i = 0; i < cantidad; i++)
{
    Console.Write($"Número {i+1} de {cantidad}: ");
    int number = Convert.ToInt32(Console.ReadLine());
    numbers.Add(number);

}


int media = StatiticsCaluculator.GetMedia(numbers);int mediana = StatiticsCaluculator.GetMediana(numbers);
List<int> moda = StatiticsCaluculator.GetModa(numbers);

Console.WriteLine($"Media: {media}");
Console.WriteLine($"Mediana: {mediana}");
Console.WriteLine($"Moda: [{string.Join(',',moda)}]");


