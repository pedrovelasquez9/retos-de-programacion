const palindromo = require('./palindromo');
const {
    frasePalindromo, 
    fraseNoPalindromo, 
    palabraPalindromo, 
    palabraNoPalindromo, 
    charNum } = require('./testArray');


test("Prueba palindromo" , () => {
    for (prueba in frasePalindromo){
        expect(palindromo(frasePalindromo[prueba])).toEqual("La frase es palíndromo");
    }
    
    for (prueba in fraseNoPalindromo){
        expect(palindromo(fraseNoPalindromo[prueba])).toEqual("La frase no es palíndromo");
    }

    for (prueba in palabraPalindromo){
        expect(palindromo(palabraPalindromo[prueba])).toEqual("La palabra es palíndromo");
    }

    for (prueba in palabraNoPalindromo){
        expect(palindromo(palabraNoPalindromo[prueba])).toEqual("La palabra no es palíndromo");
    }

     for (prueba in charNum){
        expect(palindromo(charNum[prueba])).toEqual("No es posible formar un palíndromo con un caracter o números");
    }
});
