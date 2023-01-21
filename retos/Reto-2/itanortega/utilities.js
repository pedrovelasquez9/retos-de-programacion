const palindrome = (sentence) => {
    const isPhrase = sentence.indexOf(' ') >= 0;
    const sentenceCleaned = cleanSentence(sentence.toUpperCase());
    const arraySentence = sentenceCleaned.split('');
    const isPalindrome = arraySentence.toString() === arraySentence.reverse().toString();
    console.log(arraySentence.toString() + ' - ' + arraySentence.reverse().toString());
    
    const result = 'La '
    + (isPhrase? 'frase ': 'palabra ')
    + (isPalindrome? 'es' : 'no es')
    + ' un palíndromo';

    return result;
}

const cleanSentence = (sentence) => {
    arraySpecialChars = " (.!¡?¿''\"*)".split('');
    
    arraySpecialChars.forEach(element => {
        sentence = sentence.replaceAll(element, '');
    });

    sentence = sentence.replace('Á', 'A');
    sentence = sentence.replace('É', 'E');
    sentence = sentence.replace('Í', 'I');
    sentence = sentence.replace('Ó', 'O');
    sentence = sentence.replace('Ú', 'U');
    
    return sentence;
}
 
 module.exports = {
    palindrome, 
    cleanSentence,
 };