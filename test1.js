console.log('Olha Fullstack Lab')

const soma = function (num1,num2){
    return num1 + num2;
}

const mult = function (num1,num2){
    return num1 * num2;
}


// High order function
const operacao = function (operacao,num1,num2){
    return operacao(num1,num2);
}
console.log('Soma:',operacao(soma,10,20));
console.log('Mult:',operacao(mult,10,20));

