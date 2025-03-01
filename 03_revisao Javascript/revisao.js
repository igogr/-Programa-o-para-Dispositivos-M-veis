// comentario de uma linha

/*
comentario em bloco
*/

//Variaveis
const nome = "Igor"
let idade = 23
const maiorDeIdade = true

console.log(nome)
console.log(idade)
console.log("É maior de idade?", maiorDeIdade)

//nome = "Teste"

idade = 19
console.log(idade)


//Operadores Aritmeticos

const soma = 2 + 2
const substracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 4 / 2

console.log(soma)
console.log(substracao)
console.log(multiplicacao)
console.log(divisao)


const resto = 3 % 2 
let numero = 4
console.log("RESTO -> ", resto)

const incremento = numero++
console.log("INCREMENTO -> ", incremento)

const decremento = numero-- //1
console.log("DECREMENTO -> ", decremento)

//Faz a operação e a atribuição logo em seguida
let a = 3
a %= 2
console.log(a)

//Operadores de Comparação
const igual = 10 == '10'
console.log(igual)
const estritamenteIgual =  10 === '10'
console.log(estritamenteIgual)

const maior = 3 > 2 // true
const menor = 2 < 3 // false 
const maiorOuIgual = 3 >= 2 // true
const menorOuIgual = 2 <= 3 //false

/*Estruturas de controle 
if(idade >= 18) {
    console.log("Maior de Idade")
}
if(idade >= 18){
    console.log("Maior de Idade")
} else {
    console.log("Menor de Idade")
}
*/


//Operador Ternario

const checkMaiorDeIdade = idade >=