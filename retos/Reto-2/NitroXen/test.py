from palindromo import palindrome
from unittest import TestCase


class Test(TestCase):
    def test_palindrome(self):
        self.assertEqual(palindrome("Ana"), "la palabra es un palindromo")
        self.assertEqual(palindrome("Frase random"),
                         "la frase NO es un palindromo")
        self.assertEqual(palindrome("¿Acaso hubo búhos acá?"),
                         "la frase es un palindromo")
        self.assertEqual(palindrome("Hola"), "la palabra NO es un palindromo")


print(Test().test_palindrome())
