let nome = prompt("Nome");
let idade = Number(prompt("Idade"));

let anoAtual = 2023;
let anoDeNascimento = anoAtual - idade;

console.log(
  "Nome: " + nome + ", Idade: " + idade + " anos, nasceu em " + anoDeNascimento
);
document.write(
  "Nome: " + nome + ", Idade: " + idade + " anos, nasceu em " + anoDeNascimento
);
