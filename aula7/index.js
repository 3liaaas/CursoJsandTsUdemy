//não podemos criar constantes com palavras reservadas
//constantes precisam ter nomes significativos
// não pode começar o nome de uma constante com um número
//não pode conter espaçoes ou traços
// utilizamos camelCase
// Case-sensitive
//não podemos redeclarar variáveis com let
//NÃO PODE MODIFICAR O VALOR DE UM CONSTANTE
//não utilize var, use *const*
const primeiroNumero = 5;
const segundoNumero = 10;
const soma = primeiroNumero + segundoNumero;
const expo = soma ** 2;
let resultadoTriplicado = expo * 3;
resultadoTriplicado = resultadoTriplicado + 5;
const letra = 'abc'
console.log(typeof primeiroNumero)
console.log(typeof letra + expo)

