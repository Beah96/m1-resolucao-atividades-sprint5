// Resoluções⁠

/*
1.  Escreva uma função que receba uma lista A de dimensão 30 composta apenas por números inteiros.

    A função deve retornar a quantidade de valores pares e ímpares existentes na lista recebida.

    Exemplos de saída:
    A lista recebida possui x elementos pares e y elementos ímpares.
*/

const list30Elements = [
  23, 45, 12, 78, 36, 9, 52, 67, 18, 31, 59, 81, 44, 6, 97, 22, 73, 10, 51, 68,
  3, 88, 29, 41, 65, 17, 94, 55, 80, 27,
];

function identifiesEvenOdd(listA) {
  let amountOfEven = 0;

  for (let index = 0; index < listA.length; index++) {
    const element = listA[index];

    // Incrementa a quantidade de elementos pares
    amountOfEven += element % 2 === 0;

    /* Curiosidade 
    JavaScript considera true como o valor 1 e 
    false como o valor 0 em operações aritméticas e lógicas. 
    Isso ocorre porque, internamente, true e false são valores booleanos,
    mas podem ser convertidos implicitamente em números quando necessário.
    */
  }

  const amountOfOdd = listA.length - amountOfEven;

  let result = `A lista recebida possui ${amountOfEven} elementos pares e ${amountOfOdd} elementos impares.`;

  return result;
}

console.log("1.", identifiesEvenOdd(list30Elements));
// resultado: 1. A lista recebida possui 13 elementos pares e 17 elementos impares.

/*
  2.  Escreva uma função que recebe uma lista A de tamanho 10, composta por números inteiros.
  
      Retorne o total de elementos ímpares existentes na matriz e também o percentual do valor total de números ímpares em relação à quantidade total de elementos armazenados na matriz.
  
      Retorne o seguinte texto: "O total de valores ímpares é x e corresponde a y% da lista"
  */

const list10Elements = [57, 87, 92, 1, 36, 29, 48, 44, 52, 66];

function identifiesOddInList(listA) {
  const listSize = listA.length;

  if (listSize !== 10) {
    return "A quantidade de elementos da lista precisa ser 10";
  }

  let amountOfOdd = 0;

  for (let index = 0; index < listSize; index++) {
    const element = listA[index];

    if (element % 2 !== 0) {
      amountOfOdd++;
    }
  }

  const percentageOfOdd = (amountOfOdd / listSize) * 100;

  const result = `O total de valores ímpares é ${amountOfOdd} e corresponde a ${percentageOfOdd}% da lista`;

  return result;
}

console.log("2.", identifiesOddInList(list10Elements));
// resultado: O total de valores ímpares é 4 e corresponde a 40% da lista

/*
  3.  Escreva uma função que receba como parâmetro duas listas A e B, 
      cada uma com dez elementos.
  
      A função deve realizar a validação do tamanho da lista. 
      Caso sejam maiores ou menores que 10, retorne: "Lista fora dos padrões necessários".
  
      A lista A deve ser composta por valores divisíveis por 2 e 3, 
      enquanto a lista B deve ser composta apenas por valores múltiplos de 5.
  
      A composição das listas deve ser validada pela função. 
      Caso a composição não esteja correta, retorne: "Valores não permitidos encontrados".
  
      Construir uma lista C que seja o resultado da junção das listas A e B, 
      de modo que contenha 20 elementos.
  
      Retorne a lista C resultante.
  */

const listATenElements = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const listBTenElements = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function generateList(listA, listB) {
  const checkListPattern = listA.length !== 10 || listB.length !== 10;

  // Verifica se as listas têm o tamanho correto
  if (checkListPattern) {
    return "Lista fora dos padrões necessários";
  }

  const listC = [];

  // Itera pelos elementos das listas A e B
  for (let index = 0; index < 10; index++) {
    const elementA = listA[index];
    const elementB = listB[index];

    // Verifica se os elementos respeitam as condições necessárias
    if (elementA % 2 !== 0 || elementA % 3 !== 0 || elementB % 5 !== 0) {
      return "Valores não permitidos encontrados";
    }

    // Adiciona os elementos na lista C
    listC.push(elementA, elementB);
  }

  return listC;
}

console.log("3.", generateList(listATenElements, listBTenElements));
// resultado => [6, 5, 12, 10, 18, 15, 24, 20, 30, 25, 36, 30, 42, 35, 48, 40, 54, 45, 60, 50]
