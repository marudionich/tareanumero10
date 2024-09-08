/*let pi = 3.14

function calculoarea(pi, radio){
    let area = pi * (radio**2);
    console.log(area)
}
calculoarea(pi,200)*/

function mayorDeCuatro(a, b, c, d) {
   
    let numeros = [7, 42, 37, 11];
    let mayor = numeros[0];
    
    // Iteramos sobre el array para encontrar el número mayor
    for (let index = 1; index
        < numeros.length; index++) {
        if (numeros[index] > mayor) {
            mayor = numeros[index];
        }
    }
    
    return mayor;
}

let resultado = mayorDeCuatro(7, 42, 37, 11);
console.log("El número mayor es:", resultado);

function menorDetres(a, b, c) {
   
    let numeros = [7, 42, 11];
    let menor = numeros[0];
    
    // Iteramos sobre el array para encontrar el número mayor
    for (let index = 1; index
        < numeros.length; index++) {
        if (numeros[index] < menor) {
            menor = numeros[index];
        }
    }
    
    return menor;
}

let resultadomenor = menorDetres(7, 42, 11);
console.log("El número menor es:", resultadomenor);


function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}

let numeros = [11,42,7,2,37,10];
numeros.forEach(numero => {
    console.log(`El número ${numero}: ${esParOImpar(numero)}`);
});