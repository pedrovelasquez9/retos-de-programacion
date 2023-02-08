const palindrome = require('./palindrome');
const {
    palindromePhrase, 
    nonPalindromephrase, 
    palindromeWord, 
    nonPalindromeword, 
    charNumber } = require('./testArray');


test("Prueba palindromo" , () => {
    for (testing in palindromePhrase){
        expect(palindrome(palindromePhrase[testing])).toEqual("La frase es palíndromo");
    }
    
    for (testing in nonPalindromephrase){
        expect(palindrome(nonPalindromephrase[testing])).toEqual("La frase no es palíndromo");
    }

    for (testing in palindromeWord){
        expect(palindrome(palindromeWord[testing])).toEqual("La palabra es palíndromo");
    }

    for (testing in nonPalindromeword){
        expect(palindrome(nonPalindromeword[testing])).toEqual("La palabra no es palíndromo");
    }

     for (testing in charNumber){
        expect(palindrome(charNumber[testing])).toEqual("No es posible formar un palíndromo con un caracter o números");
    }
});
