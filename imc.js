
// Situação 5: Calculadora de IMC com classificação
// Problema: Desenvolva um programa que calcule o Índice de Massa Corporal (IMC)
// de uma pessoa com base no seu peso e altura. 
// Além disso, o programa deve classificar o IMC em uma das seguintes categorias:

// Abaixo do peso: IMC menor que 18,5
// Peso normal: IMC entre 18,5 e 24,9
// Sobrepeso: IMC entre 25 e 29,9
// Obesidade: IMC igual ou maior que 30
// Desafio extra: Se a pessoa estiver com obesidade, exiba uma mensagem adicional indicando se ela está no grau 1, 2 ou 3 de obesidade:

// Obesidade Grau 1: IMC entre 30 e 34,9
// Obesidade Grau 2: IMC entre 35 e 39,9
// Obesidade Grau 3: IMC igual ou maior que 40

console.log("\n........... Calculadora de IMC ...........\n");

const prompt = require(`prompt-sync`)()

// Obter altura e peso do usuário
let peso = parseFloat(prompt('Digite seu peso: ')); // em kg
let altura = parseFloat(prompt('Digite sua altura, usando ponto. Ex.: 1.70m: ')); // em metros

// Calcular o IMC usando a fórmula IMC = Peso / altura 2
let imc = peso / (altura * altura);

// Decidir
if (imc < 18.5) {
  console.log("\nVocê está abaixo do peso\n");

} else if (imc >= 18.5 && imc < 25) {
  console.log("\nVocê está com o peso normal\n");

} else if (imc >= 25 && imc < 30) {
  console.log("\nVocê está com sobrepeso\n");

} else {
  console.log("\nVocê está obeso\n");
  
  if (imc >= 30 && imc < 35) {
    console.log("\nVocê está com obesidade de Grau 1\n");

  } else if (imc >= 35 && imc < 40) {
    console.log("\nVocê está com obesidade de Grau 2\n");

  } else {
    console.log("\nVocê está com obesidade de Grau 3\n");
  }
}