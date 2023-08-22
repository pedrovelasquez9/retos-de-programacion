import unittest
import palindromo

class Tests(unittest.TestCase):
    def test_palindrome(self):
        self.assertTrue(palindromo.palindrome("Anna"))
        self.assertTrue(palindromo.palindrome("Hola"))
        self.assertTrue(palindromo.palindrome("Frase random"))
        self.assertTrue(palindromo.palindrome("¿Acaso hubo búhos acá?"))

if __name__ == '__main__':
    unittest.main()