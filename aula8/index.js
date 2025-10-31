const nome = 'Elias Araujo';
const sobrenome = 'Rodrigues';
const idade = 21;
const peso = 95;
const alturaEmM = 1.69;
let imc; 
let anoNascimento ;

imc = peso / (alturaEmM*alturaEmM);
anoNascimento = 2025 - idade;

//template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg e a sua altura em metros é ${alturaEmM}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);