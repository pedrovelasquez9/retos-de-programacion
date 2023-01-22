let arrayFibo = []
let cantDeIteraciones = 0
let aux = 0

const formarArray = (cantDeIteraciones) => {
    for (let index = 1; index <= cantDeIteraciones; index++) {
        if (index<=2) {
            aux++
        } else {
            aux = arrayFibo[index-2] + arrayFibo[index-3]
        }
        arrayFibo.push(aux)
    }
    return arrayFibo
}

const mostrarFibo = (indice) => {
    if(indice<=0) {
        if (indice<0) {
            arrayFibo.push("Ingresar # mayor o igual a 0");
        }
        else {
            arrayFibo.push(1)
        }
    }
    return formarArray(indice)
}

cantDeIteraciones=10
let rta = mostrarFibo(cantDeIteraciones)
console.clear();
console.log(`\nPara la cantidad de iteraciones: ${cantDeIteraciones}\n${rta.toString()}\n`)