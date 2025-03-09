import re
from unicodedata import normalize


def palindrome(word):
    word = word.upper()
    if isAPhrase(word):
        word = word.replace(" ", "").strip("¿").strip("?").strip(
            "¡").strip("!").strip("'").strip('"').strip(",").strip(".")
        word = re.sub(
            r"([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+", r"\1",
            normalize("NFD", word), 0, re.I
        )
        word = normalize("NFC", word)
        if word == word[::-1]:
            return "la frase es un palindromo"
        else:
            return "la frase NO es un palindromo"

    else:
        if word == word[::-1]:
            return "la palabra es un palindromo"
        else:
            return "la palabra NO es un palindromo"


def isAPhrase(word):
    return " " in word
