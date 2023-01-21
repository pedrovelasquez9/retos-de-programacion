let arrayFibo = []
let cantDeIteraciones = 0
let axu = 0

const formarArray = (cantDeIteraciones) => {
    for (let index = 1; index <= cantDeIteraciones; index++) {
        if(index<=2)
            axu++
        else
            aux = cantDeIteraciones[index-1] + cantDeIteraciones[index-2]
        cantDeIteraciones.push(aux)
    }
    return cantDeIteraciones
}

const mostrarFibo = (indice) => {
    if(indice<=0)
        if(indice<0)
        arrayFibo.push("Ingresar # mayor o igual a 0");
        else
            arrayFibo.push(1)
    return formarArray(indice)
}

cantDeIteraciones=0
let rta = mostrarFibo(cantDeIteraciones)
console.log(rta.toString())