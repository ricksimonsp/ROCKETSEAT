// Estrutura de repetição
// For
// break - faz parar a execução do loop
// continue - pula a execução do momento

for(let e = 15; e > 0; e--) {
    if(e === 10) {
        break;
    }
    console.log(e)   
}


for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }
    console.log(i)   
}


// while (por enquanto)

let a = 54375843350;
while(a > 10) {
    console.log(a)

    a /= 100
}


// for...of

let name = "Rick";
let names = ["Rosangela", "Fernanda", "Adrielli"];

for(let name of names) {
    console.log(name)
}

// for...in

let person = {
    nickname: "Rick",
    age: 49,
    weight: 85
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}

