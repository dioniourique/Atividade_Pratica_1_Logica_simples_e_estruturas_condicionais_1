let numeroDeMacas = 15;

let valorTotal;
if (numeroDeMacas < 12) {
  valorTotal = numeroDeMacas * 0.3;
} else {
  valorTotal = numeroDeMacas * 0.25;
}

document.write("O valor total da compra é: R$" + valorTotal.toFixed(2));
