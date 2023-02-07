/*
Ana
Anna
Otto
¿Acaso hubo búhos acá?
A man, a plan, a canal, Panama!
Anita lava la tina
Able was I ere I saw Elba
 */
using System;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Palindromo
{
    internal class Program
    {
        public static bool palindrome = false;
        
        static void Main(string[] args)
        {
            CheckText("¿Acaso hubo búhos acá?");
            CheckText("anna");
            CheckText("ana");
            CheckText("Otto");
            CheckText("Able was I ere I saw Elba");
            CheckText("Anita lava la tina");
            CheckText("A man, a plan, a canal, Panama!");
            CheckText("¿Acaso hubo búhos acá?");
            CheckText("manolico!");
            Console.ReadKey();
        }

        /// <summary>
        /// check if text is palindrome
        /// </summary>
        /// <param name="text"></param>
        public static void CheckText(string text)
        {
            string originalText = text;
            text = ClearString(text);
            string textReverse = ReverseString(text);

            int totalConut = 0;
            foreach (Char letter in text)
            {
                char[] characters = textReverse.ToCharArray();
                if (letter != characters[totalConut])
                {
                    palindrome = false;
                    break;
                }
                else
                    palindrome = true;
                totalConut++;
            }
            Console.WriteLine($"text: {originalText}, resultado de palindromo: {palindrome}");
        }

        /// <summary>
        /// return a reverse text
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string ReverseString(string str)
        {
            char[] chars = str.ToCharArray();
            for (int i = 0, j = str.Length - 1; i < j; i++, j--)
            {
                chars[i] = str[j];
                chars[j] = str[i];
            }
            return new string(chars);
        }


        /// <summary>
        /// clear text
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string ClearString(string text)
        {
            text = text.ToLower().Trim(); //en minuscula
            text = text.Normalize(NormalizationForm.FormD);
            Regex reg = new Regex("[^a-zA-Z0-9 ]"); 
            text = reg.Replace(text, "");
            return text = String.Concat(text.Where(c => Char.IsLetter(c)));
        }
    }
}
