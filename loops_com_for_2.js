// Exercício 1

function one() {
    for (let i = 15; i <= 200; i++) {
        console.log(i * i)
    }
}
// one()

// Exercício 2

function two() {
    let x = 0
    for (let i = 1; i <= 100; i++) {
        x += i
    }
    return x
}
// console.log(two())

// Exercício 3

function three() {
    for (let i = 0; i <= 200; i++) {
        if (i % 4 === 0) {
            console.log(i)
        }
    }
}
// three()

// Exercício 4

function four() {
    let x = 0
    let times = 0
    for (let i = 50; i <= 70; i++) {
        if (i % 2 === 0) {
            x += i
            times++
        }
    }
    return `A soma é ${x} e a média é ${x / times}.` 
}
// console.log(four())