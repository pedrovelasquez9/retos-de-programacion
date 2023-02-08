
function palindrome (text){
    if (text.length > 1 && typeof text){
        let originalText=text;
        text=text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        text=text.replaceAll(/\s/g,"");
        text=text.replaceAll(/\W/g,"");

        let inverseText = text.split("").reverse();
        inverseText = inverseText.join();
        inverseText = inverseText.replaceAll(",","");

        let beginAnswer=""
        if (originalText.search(" ") !== -1){
            beginAnswer = "La frase ";
        }
        else{
            beginAnswer = "La palabra ";
        }
        
        if (text.toLocaleLowerCase() === inverseText.toLocaleLowerCase()){
            return beginAnswer + "es palíndromo";
        }
        else{
            return beginAnswer + "no es palíndromo";
        }
    }
    return "No es posible formar un palíndromo con un caracter o números"
}    
 
module.exports = palindrome;