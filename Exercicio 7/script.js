let totalEleitores = 1000;
let votosBrancos = 150;
let votosNulos = 50;
let votosValidos = 800;

let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;

document.write(
  "Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%<br>"
);
document.write(
  "Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%<br>"
);
document.write(
  "Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%"
);
