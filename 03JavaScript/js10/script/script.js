/*

new
is a left-hand-side expression
to create a new object

*/

let name = new String('Rick')
let age = new Number(49)
console.log(name, age)

let date = new Date('2022-12-29')
console.log(date)

/* Unary Operators
    typeof
    delete
*/

const person = {
    name: 'Rick',
    age: 49,
}

delete person.age

console.log(person)


//Operadores Aritiméticos

    //multiplicação *
    console.log(3.2 * 5.5)

    //divisão /
    console.log(12 / 2)

    //soma +
    console.log(34 + 67)

    //subtração - 
    console.log(34 - 23)


    //resto da divisão %
    let remainder
    remainder = 11 % 11
    console.log(remainder)

    //incremento ++
    let increment = 0
    increment ++

    console.log(increment)

    //decremento --
    let decrement = 2
    decrement --
    console.log(decrement)

    //exponencial **
    console.log(3 ** 3)

    