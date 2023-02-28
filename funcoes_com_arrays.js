const listaDeElementos = [1,5,7,9,3, "10", "11", "15"];

//exercicio 1
function retornaTodosElementos(){
    return listaDeElementos;
}

console.log(retornaTodosElementos());

//exercicio 2
function retornaValorEpecifico(number){
    let result = "";
    for (let i = 0; i < listaDeElementos.length; i++) {
        if(i === number){
            result = `O valor contido nesta posição é ${listaDeElementos[i]}`;
        }
    }
    return result;
}

console.log(retornaValorEpecifico(6));

//exercicio 3
function retornarTipoElemento(number){
    let result = "";
    for (let i = 0; i < listaDeElementos.length; i++) {
        if(i === number && typeof listaDeElementos[i] === "string"){
            result = `O elemento ${listaDeElementos[i]} é um elemento do tipo texto`;
        }else if(i === number && typeof listaDeElementos[i] === "number"){
            result = `O elemento ${listaDeElementos[i]} é um elemento do tipo número`;
        }
    }
    return result;
}

console.log(retornarTipoElemento(4));

//exercicio 4
function removeUltimoElementoString() {

    let result = "";

    if (typeof listaDeElementos[listaDeElementos.length - 1] === "string") {
      listaDeElementos.pop();
      result = "Elemento deletado com sucesso";
    } else {
      result = "Falha ao remover o elemento da lista";
    }

    return result;
  }

console.log(removeUltimoElementoString());

//exercicio 5
function consultaPosição(valor){
    for (let i = 0; i < listaDeElementos.length; i++) {
        if(valor === listaDeElementos[i]){
            return `O valor procurado está na posição: ${i}`;
        }
    }
    return `Valor não encontrado.`;
}

console.log(consultaPosição(10));

//exercicio 6
function removerElementoEspecifico(valor){
    if(listaDeElementos.indexOf(valor) > 0){
        listaDeElementos.splice(listaDeElementos.indexOf(valor), 1);
        return `Elemento ${valor} deletado com sucesso`;
    }
    return `Elemento não encontrado.`;
}

console.log(removerElementoEspecifico(7));

//exercicio 7
function inserirNaPosicaoCorreta(valor) {
    if (typeof valor === 'number') {
      listaDeElementos.unshift(valor); // insere no início da lista
    } else if (typeof valor === 'string') {
      listaDeElementos.push(valor); // insere no final da lista
    } else {
      return "Valor inválido, a função recebe apenas valores numéricos de 0 a 10 ou strings.";
    }
    return "Lista atualizada com sucesso.";
}