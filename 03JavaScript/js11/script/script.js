// Grouping Operator ()

let total = (2 + 3) * 5;
console.log(total)

// Operadores de Comparação

// Irá comparar valores e retornar um boolean como resposta à comparação

let one = 1
let two = 2


// ==  igual a
console.log(  two == 1)
console.log( one == "1")

// !=  diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")


//  ===   estritamente igual a
console.log( one === "1")
console.log( one === 1)

//  === estritamente diferente de
console.log( two !== "2")
console.log( two !== 2 )


// >  Maior que
console.log(one > two) //FALSE

// >= Maior ou igual a
console.log(one >= 1) //TRUE
console.log(two >= 1) //TRUE

// <  Menor que
console.log(one < two) //TRUE

// <= Menor ou igual a
console.log(one <= two) //TRUE
console.log(one <= 1) //TRUE
console.log(one <= 0) //FALSE

// Operadores de atribuição (Assignment)
let x
console.log(x)

// assignment
x = 1
console.log(x)
// addition assignment
x += 2
console.log(x)
// subtraction assignment
x -= 1
console.log(x)
// multiplication assignment
x *= 2
console.log(x)
// division assignment
x /= 2
console.log(x)
// remainder, exponetiation
x %= 2
console.log(x)


// Logical Operators

// 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

let pão = true
let queijo = false

// And &&
console.log(pão && queijo)

// Or ||
console.log(pão || queijo)

// Not !
console.log(!pão)

// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top

let pane = true
let queso = true

const niceBreakfast = pane && queso ? "café top!" : "café ruim pra caramba!"

console.log(niceBreakfast)

// Maior de 18

let age = 15
const canDrive = age >= 18 ? "You can drive!" : "You cannot drive!"
console.log(canDrive)


// String Operator

// Concatenation (concatenação)
// Retorna a união de duas Strings

let alpha = "alpha";
console.log(alpha + "bet" + "s.")

// Type conversion - vs Type coersion

console.log(Number("9") + 5)

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

/*

    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/


/* 

    Operator Precedence
    
    * Grouping                        ( )
    * Negação e incremento            ! ++ --
    * Multiplicação e divisão         * /
    * Adição e subtração              + - 
    * Relacional                      < <= > >=C
    * Igualdade                       == != === !==
    * AND                             &&
    * OR                              ||
    * Condicional                     ?:
    * Assignment (atribuição)         = += -= *=

*/

