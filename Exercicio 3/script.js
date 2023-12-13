let valorTotal = Number(prompt("Digite o total da compra"));
let parcelas = Number(prompt("Digite o número de parcelas"));
let valorParcela = valorTotal / parcelas;

document.write(
  "O valor total da compra foi R$" + valorTotal.toFixed(2) + "<br>"
);
document.write(
  "Forma de pagamento: " + parcelas + "x de R$" + valorParcela.toFixed(2)
);
