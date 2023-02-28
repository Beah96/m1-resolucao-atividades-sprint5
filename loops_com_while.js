//Exercicio 1
let numero = parseInt(prompt('Digite um numero entre 0 e 10!'));
while(numero < 0 || numero > 10){
    numero = parseInt(prompt('Valor inválido. Digite um numero entre 0 e 10!'));
}

//Exercicio 2
let nome = prompt('Digite seu nome de usuário');
let senha = prompt('Digite a sua senha');
while(nome == senha){
    alert("Seu nome de usuário não deve ser igual a senha!!")
    nome = prompt('Digite seu nome de usuário');
    senha = prompt('Digite a sua senha');
}

//Exercicio 3
let num = parseInt(prompt('Digite um numero'));
let soma = num;
while(num >= 0 && num <= 10){
    soma += num;
    num = parseInt(prompt('Digite um numero'));
}
alert('O resultado da soma é: '+soma);

//Exercicio 4
let voto = prompt('Digite seu voto');
let a = 0;
let b = 0;
let c = 0;
while(voto != 'x'){
    if(voto == 'a'){
        a++;
    }else if(voto == 'b'){
        b++;
    }else if(voto == 'c'){
        c++
    }else if(voto == 'x'){
        continue; 
    }else{
        alert('Opção inválida');
    }
    voto = prompt('Digite seu voto');
}
console.log(`O candidato A teve ${a} voto(s) \nO caditato B teve ${b} voto(s) \nO candidato C teve ${c} voto(s)`);
