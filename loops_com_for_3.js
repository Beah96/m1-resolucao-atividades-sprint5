// Exercício 1

function fibonacci() {
    let anterior = 0
    let atual = 1
    let proximo

    let resultado = []

    for (let i = 1; i <= 15; i++) {
        resultado.push(anterior)
        proximo = anterior + atual;
        anterior = atual;
        atual = proximo
    }

    return resultado.join(", ")
}
// console.log(fibonacci())

// Exercício 2
