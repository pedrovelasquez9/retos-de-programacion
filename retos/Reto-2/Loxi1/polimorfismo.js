let arrayParrafo = [], arrayReverso = [], tipoTexto = []
let axu = '', esTexto = false, _palabraTexto = '', texto = ''

//Texto en minusculas
const convertirMinusculas = (texto) => texto.toLowerCase()
//Quitar espacios en blanco
const quitarEspacios = (texto) => texto.replace(/\s+/g, '')
//Quitar tildes
let quitarTides = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
//Quitar signos
let quitarSignos = (texto) => texto.replace(/[¿!¡;,:\.\?#@()~"]/g,"")

let esTextoPoliformico = (texto) => {
    aux = convertirMinusculas(texto)
    aux = quitarEspacios(aux)
    aux = quitarTides(aux)
    aux = quitarSignos(aux)

    //convertir en array el texto
    arrayParrafo = aux.split('')
    //invertir el orden del array
    arrayReverso = aux.split('').reverse()
    //Comparar el valor del array
    arrayParrafo.every((_letra, _indc) => {
        if(_letra != arrayReverso[_indc])
        {
            esTexto = true
            return false
        }
    })
    
    tipoTexto[0] = texto.includes(' ') ? 'La Frase' : 'La Palabra'
    tipoTexto[1] = esTexto ? 'no' : 'si'
    tipoTexto[2] = 'es un palíndromo'
    
    return tipoTexto.join(' ')
}
texto = '¿Acaso hubo búhos acá?'
_palabraTexto = esTextoPoliformico(texto)
console.log(`\nLa palabra:\n ${texto} \n ${_palabraTexto}\n`)