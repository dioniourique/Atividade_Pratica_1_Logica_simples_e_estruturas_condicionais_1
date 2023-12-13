let A = 10;
let B = 20;

document.write("Valores iniciais: A = " + A + ", B = " + B + "<br>");

let temp = A;
A = B;
B = temp;

document.write("Valores após a troca: A = " + A + ", B = " + B);
