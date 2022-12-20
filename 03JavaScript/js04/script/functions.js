//FUNCTIONS
//Declaration - declaração da função
//Function statement

/* function creatPhrase () {
    console.log('Estudar é muito bom!');
    console.log('Paciência e persistência!');
    console.log('Revisão é mãe do aprendizado');
}

//execute, run, call, invoke

creatPhrase()
console.log('Fim do Programa!') */



//FUNCTION EXPRESSION
//FUNCTION ANONYMOUS

//parâmetros - parameters
const sum = function(number1, number2) {
    total = number1 + number2
    return total

}

//arguments
let number1 = 34
let number2 = 25
sum(number1, number2)

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

