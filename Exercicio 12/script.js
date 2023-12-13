let anoDeNascimento = prompt("Por favor, insira o seu ano de nascimento:");

let anoAtual = 2023;

let idade = anoAtual - anoDeNascimento;

if (idade >= 16) {
  document.write("Você poderá votar este ano!");
} else {
  document.write("Você não poderá votar este ano.");
}