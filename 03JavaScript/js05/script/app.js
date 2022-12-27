//Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return 'Suco de ' + fruta1 + ' com ' + fruta2
}

const copo = fazerSuco('morango', 'abacaxi.')

console.log(copo);

//-----------------------------------------------------------------------------------------

function modelVersion(ModeloDoCarro, VersãoDoCarro){
    return 'Acelerou um turbinado, era um ' + ModeloDoCarro + ' versão ' + VersãoDoCarro
}

const carro = modelVersion('Voyage', 'GLS 1.8!')

console.log(carro);

//-----------------------------------------------------------------------------------------


let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)



//Function hoisting

//sayMyName()

//function sayMyName(){
//    console.log('Ricardo')
//}
/*

sheIsBeautiful()

function sheIsBeautiful() {
    console.log('Jennifer Aniston')
}



//parâmetros - parameters
const sum = function(number1, number2){
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25


console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
*/
//sum(2, 3) //argumentos - aguments
