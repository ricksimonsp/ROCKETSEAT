/*
Transformar notas escolares

Crie um algorítimo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - E


let grade = 100;

    if(grade >= 90) {
        console.log("A")
    } else if(grade >=80) {
        console.log("B")
    } else if(grade >=70) {
        console.log("C")
    } else if(grade >=60) {
        console.log("D")
    } else if(grade >=1) {
        console.log("E")
    } else {
        console.log("Nota inválida!")
    }



let notas = 100

function getNotas(nota) {
let notaA = nota >=90 && nota <=100
let notaB = nota >=80 && nota <=89
let notaC = nota >=70 && nota <=79
let notaD = nota >=60 && nota <=69
let notaE = nota < 60 && nota >= 0

let notaFinal;

if(notaA) {
    notaFinal = "A"
} else if (notaB) {
    notaFinal = "B"
} else if (notaC) {
    notaFinal = "C"
} else if (notaD) {
    notaFinal = "D"
} else if (notaE) {
    notaFinal = "E"
} else {
    notaFinal = "Nota inválida"
}

return notaFinal

}

console.log(getNotas(99))
console.log(getNotas(-5))
console.log(getNotas(0))
console.log(getNotas(45))
console.log(getNotas(68))
console.log(getNotas(55))
console.log(getNotas(67))
console.log(getNotas(80))
*/

/* Sistema de gasto familiar

Criar um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Com base nisso criar uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.



let family = {
    incomes: [2550, 3200, 250.43, 360.45],
    expenses: [320.34, 1500, 2500, 128.45, 176.87, 1450]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }
    return total
}


function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    const itsOk = total >= 0

    let balanceText = "negativo!"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}`)
}

calculateBalance()


// Celsius em Fahrenheit
    Criar uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

    C = (F - 32) * 5/9

    F = C * 9/5 + 32



// transformDegree("50F")
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenheitExists = degree.toUpperCase().includes("F")

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error("Grau não identificado!")
    }
    
    // fluxo ideal F => C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = "C"

    return formula(updatedDegree) + "C"
}

try {
    console.log(transformDegree("50F"))
    //transformDegree("50Z")
} catch (error) {
    console.log(error.message)
}
*/

/*
Buscando e contando dados em Arrays
Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

- contar o número de categorias e o número de livros em cada categoria
- contar o número de de autores
- mostrar livros do autos Augusto Cury
- transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log("Total de livros da categoria: ", category.category)
    console.log(category.books.length)
}


function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();