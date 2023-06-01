
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

let frase = "los canguros son muy astutos, y viven en las cuevas de Disneylandia";
const letra = "e";

// ================================ for
function contarLetra() {
    let contar = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            contar++;
        }
    }
    console.log(contar);
    return contar
}
contarLetra(frase, letra)



// ================================= forof


let contador = 0
function contarLetra2() {

    for (let caracter of frase) {

        if (caracter === letra) {
            contador += 1
        }
    }
console.log(contador)
return contador
}
contarLetra2(frase, letra)



