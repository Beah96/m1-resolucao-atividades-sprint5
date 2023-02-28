// Exercício 1

function verticalText(text) {
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
}

// Exercício 2

function incrementText(text) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    result += text[i];
    console.log(result);
  }
}

// Exercício 3​

function incrementTextBackwards(text) {
  let result = "";
  let initialIndice = text.length - 1;

  for (let i = initialIndice; i >= 0; i--) {
    result = text[i] + result;
    console.log(result);
  }
}

// Exercício 4

function padEnd(text, numRepeat, textRepeat) {
  let result = text;

  for (let i = 0; i < numRepeat; i++) {
    result += textRepeat;
  }

  return result;
}

// Exercício 5

function subString(text, startPosition, endPosition) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    if (i > startPosition && i < endPosition) {
      result += text[i];
    }
  }

  return result;
}

// Exercício 6

function stringRepeater(text, numRepeat) {
  let result = "";

  for (let i = 0; i < numRepeat; i++) {
    result += text;
  }

  return result;
}

// Exercício 7

function stringCentralizer(text, numRepeat, textRepeat) {
  let result = ` ${text} `;

  for (let i = 0; i < numRepeat; i++) {
    result = textRepeat + result + textRepeat;
  }

  return result;
}
