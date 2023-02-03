
function palindromo (text){
    if (text.length > 1 && typeof text){
        //coembjgdfjzhf
        let textOriginal=text;
        text=text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        text=text.replaceAll(/\s/g,"");
        text=text.replaceAll(/\W/g,"");

        let textInverso = text.split("").reverse();
        textInverso = textInverso.join();
        textInverso = textInverso.replaceAll(",","");

        let palabra=""
        if (textOriginal.search(" ") !== -1){
            palabra = "La frase ";
        }
        else{
            palabra = "La palabra ";
        }
        
        if (text.toLocaleLowerCase() === textInverso.toLocaleLowerCase()){
            return palabra + "es palíndromo";
        }
        else{
            return palabra + "no es palíndromo";
        }
    }
    return "No es posible formar un palíndromo con un caracter o números"
}    
 
module.exports = palindromo;



