/* let clima = 'Quente';
clima = 'Frio';
console.log(clima); */


//const e let são locais e só funcionam no escopo onde foram criadas

const y = 1;

{
    const y = 0
    console.log('> existe Y!', y)
}

console.log('> existe Y depois do bloco?', y)
