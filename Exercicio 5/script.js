let nome;
let nota1;
let nota2;
let nota3;
let media;

nome = prompt("Digite o nome do aluno: ");
nota1 = +prompt("Digite a primeira nota: ");
nota2 = +prompt("Digite a segunda nota: ");
nota3 = +prompt("Digite a terceira nota: ");

media = (nota1 + nota2 + nota3) / 3;

document.write(
  "O aluno " + nome + " ficou com média " + media.toFixed(1) + "."
);
