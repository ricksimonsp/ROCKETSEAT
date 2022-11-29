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


console.log({
    name: 'Ricardo',
    idade: 49,
    naturalidade: 'São Paulo'
})