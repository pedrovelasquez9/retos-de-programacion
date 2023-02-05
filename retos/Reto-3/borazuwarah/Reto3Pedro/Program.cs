/*
 - Camel case: **holaMundo**
- Snake case: **hola_mundo**
- Pascal case: **HolaMundo**
- Kebab case: **hola-mundo**
*/
using System;
using System.Globalization;


namespace Reto3Pedro
{
    internal class Program
    {
        public enum Type
        {
            Camel,
            Snake,
            Pascal,
            Kebab
        }
        static void Main(string[] args)
        {
            string tryText = "hola mundo que tal";
            Nomenclature(tryText, Type.Camel);
            Console.WriteLine("********************");
            Nomenclature(tryText, Type.Snake);
            Console.WriteLine("********************");
            Nomenclature(tryText, Type.Pascal);
            Console.WriteLine("********************");
            Nomenclature(tryText, Type.Kebab);
            Console.ReadKey();
        }

        /// <summary>
        /// Process text
        /// </summary>
        /// <param name="text"></param>
        /// <param name="tipe"></param>
        public static void Nomenclature(string text, Type tipe)
        {
            switch (tipe)
            {
                case Type.Camel:
                    CaseCamel(text);
                    break;
                case Type.Snake:
                    CaseSnake(text);
                    break;
                case Type.Pascal:
                    CasePascal(text);
                    break;
                case Type.Kebab:
                    CaseKebab(text);
                    break;
                default:
                    Console.WriteLine("Ha ocurrido un error al elegir el tipo!");
                    break;
            }
        }

        /// <summary>
        /// Case Camel
        /// </summary>
        /// <param name="text"></param>
        public static void CaseCamel(string text) 
        {
            //Camel case: **holaMundo
            string result = new CultureInfo("en").TextInfo.ToTitleCase(text.ToLower());
            result = Char.ToLowerInvariant(result[0]) + result.Substring(1);
            result = SearchAdnReplace(result, " ", "");
            Console.WriteLine($"Type: Camel, original text: {text}");
            Console.WriteLine($"Result: {result}");
        }

        /// <summary>
        /// Case Snake
        /// </summary>
        /// <param name="text"></param>
        public static void CaseSnake(string text)
        {
            //Snake case: **hola_mundo
            string resutl = SearchAdnReplace(text," ","_").ToLower();
            Console.WriteLine($"Type: Snake, original text: {text}");
            Console.WriteLine($"Result: {resutl}");
            
        }

        /// <summary>
        /// Case Pascal
        /// </summary>
        /// <param name="text"></param>
        public static void CasePascal(string text)
        {
            //Pascal case: **HolaMundo
            string result = new CultureInfo("en").TextInfo.ToTitleCase(text.ToLower());
            result = SearchAdnReplace(result, " ", "");
            Console.WriteLine($"Type: Pascal, original text: {text}");
            Console.WriteLine($"Result: {result}");

        }

        /// <summary>
        /// case Kebab
        /// </summary>
        /// <param name="text"></param>
        public static void CaseKebab(string text)
        {
            //Kebab case: **hola - mundo
            string resutl = SearchAdnReplace(text, " ", "-").ToLower();// text.Replace(" ", "-").ToLower();
            Console.WriteLine($"Type: Kebab, original text: {text}");
            Console.WriteLine($"Result: {resutl}");
        }


        /// <summary>
        /// Search and replace
        /// </summary>
        /// <param name="text"></param>
        /// <returns>string</returns>
        public static string SearchAdnReplace(string text, string search, string replace)
        {
            if (text.Contains(search))
                text= text.Replace(search, replace);
            return text;
        }
    }
}
