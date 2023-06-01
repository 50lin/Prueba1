console.log("=============")

// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números
let numeroDado = prompt();


function verificarNumero() {
    {
        if (!isNaN(numeroDado)) {
            
            imprimirImpares(numeroDado)

        } else {
            alert('No es un número intenta de nuevo');
            // no recuerdo hacer que retorne a mostrar prompt luego de una falla de veridicacion
        }
    }

}

verificarNumero()



function imprimirImpares() {


let numeroMasCincuenta = +numeroDado + 50;
console.log(numeroMasCincuenta) 
  

    for (let i = 0; i < numeroMasCincuenta; i++) {

        if (i % 2 == 1) {
            console.log(i)
        }
    }
}





