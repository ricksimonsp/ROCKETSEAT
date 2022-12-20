//Arrow Function
/*
const sayMyName = () => {
    console.log('Ricardo')
}

sayMyName()
*/

//Callback Function

/*function sayMyName(name){
    console.log('Antes de executar a função callback!')

    name()

    console.log('Depois de executar a callback!')
}

sayMyName(
    () => {
        console.log('Estou em uma callback!')
    }
)
*/



/*

Function Constructor
  * Expressão New
  * Criar um novo objeto
  * This keyword


function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando'
    }
}

const ric = new Person('Ricardo')
const ro = new Person('Rosangela')
console.log(ric.walk())
console.log(ro.walk())
*/



//Object

const person = {
    name: 'John',
    age: 30,
    weight: 80,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos.`)

//Array

const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

console.log(animals.length)

