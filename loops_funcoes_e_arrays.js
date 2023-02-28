// CASO 01
function newElementsInsert(insertedElement, list) {
  if (
    (typeof insertedElement == "string" && insertedElement.length > 7) ||
    list.length >= 10
  ) {
    return "Não foi possível inserir este valor";
  } else {
    list.push(insertedElement);
    return `Elemento inserido com sucesso, a lista agora é: ${list}`;
  }
}

// CASO 02

function squareList(a) {
  if (a.length == 15) {
    let b = [];

    for (let index = 0; index < a.length; index++) {
      if (Number.isInteger(a[index])) {
        b[index] = a[index] ** 2;
      } else {
        return "a lista deve conter extamente 15 elementos inteiros";
      }
    }

    return b;
  }

  return "a lista deve conter extamente 15 elementos inteiros";
}
