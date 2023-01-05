//if...else

let temperature = 38.5;

if(temperature >= 38) {
    console.log("High fever! Get ready to die! hahahaha!")
} else if(temperature <= 37.5 && temperature >= 37){
    console.log("Moderate fever! Nothing will happen, stop crying!")
} else {
    console.log("You are good, you pussy!")
}

// Switch

let expression = "c"

switch (expression){
    case "a":
        console.log("a")
        break
    case "b":
        console.log("b")
        break
    default:
        console.log("default")
        break
}

// Throw

function sayMyName(name = " ") {
    if (name === " ") {
        throw "O nome é obrigatório!"
    }
    console.log("Depois do Erro!")
}

// Try - Catch

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log("Após a função de erro!")

