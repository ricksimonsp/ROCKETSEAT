/*

## Para criar nomes das variáveis

*JS é case-sensitive (sensível a maísculas/minúsculas)
*JS aceita a cadeia de caracteres Unicod

- Posso:
    * Iniciar com esses caracteres especiais: $ _
    * Iniciar com letras
    * Colocar acentos
    * Letras maísculas e minúsculas fazem diferença

- Não posso:
    * Iniciar com números
    * Colocar espaços vazios no nome

- Ideal:
    * Criar nomes que fazem sentido
    * Nomes que expliquem o que a variável é ou faz
    * camelCase
    * snake_case
    * Escrever em Inglês

*/
//Object
/* const person = {
    name: 'Ricardo',
    age: 49,
    weight: 84.5,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} e pesa ${person.weight} quilos.`);

//Array

const animals = ['gato', 'cachorro', 'rato'];

console.log(animals); */



let student = {
    name: 'Ricardo',
    age: 49,
    altura: 185,
    isSubscribed: true
}

console.log(`${student.name} tem ${student.age} e tem ${student.altura}cm de altura.`)


nome = 'Ricardo'

let idade, isHuman

idade = 49
isHuman = true

console.log('O ' + nome + ' tem ' + idade + ' anos.')

const students = [];

