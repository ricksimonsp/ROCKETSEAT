/*
Prototype

* prototype-based language
* prototype chain
* __proto__


Type conversion (typecasting) vs Type coersion

* Alteração de um tipo de dado para outro tipo.

*/

// Manipulando Strings e Números

// Transformar String em Números e Números em String

let string = '123'
Number(string)
console.log(string)

let number = 321
String(number)
console.log(number)


// Contar quantos caracteres tem uma palavra e quanto dígitos tem um número

let word = 'Anticonstitucionalicímamente'
console.log(word.length)

let numero = 12345
console.log(String(numero).length)


// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let numeral = 345.7080110558
console.log(numeral.toFixed(2).replace('.', ','))


// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também!

let bigWord = 'Programar é muito bacana!'
console.log(bigWord.toUpperCase())


// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = 'Eu quero viver o Amor!'
let myArray = phrase.split(' ')
let phraseWithUnderScore = myArray.join('_')
console.log(phraseWithUnderScore.toLocaleUpperCase())


// Verificar se o texto contém a palavra Amor

let frase = 'Eu quero viver o amor!'
console.log(frase.includes('amor'))


// Criar Array com construtor

let myNewArray = new Array('R', 'i', 'c', 'a', 'r', 'd', 'o')
console.log(myNewArray)


// Contar elementos de uma Array

console.log(['a', 'xoxota', 'mega_sena_da_virada'].length)


// Transformar uma cadeia de caracteres em elementos de um Array

let toWord = 'manipulação'
console.log(Array.from(toWord))


// Manipulando Arrays

let techs = ['html', 'css', 'js']

// adicionar um item no fim
techs.push('nodejs')

// adicionar no começo
techs.unshift('sql')

// remover do fim
techs.pop()

//remover do começo
techs.shift()

// pegar somente alguns elementos do array
//console.log(techs.slice(1))

// remover 1 ou mais itens em qualquer posição do array
techs.splice(2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)


console.log(techs)