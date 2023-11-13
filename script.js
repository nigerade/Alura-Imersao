// Aula 1 - Com exercício sugerido por IA
let valorEmDolar = 30;
let valorEmEuro = 30;
let valorEmLibra = 30;
let valorEmIene = 30;

let cotacaoDolar = 5.32;
let cotacaoEuro = 5.25;
let cotacaoLibra = 6.02;
let cotacaoIene = 0.032;


let valorEmReal = valorEmDolar * cotacaoDolar;
valorEmRealDolar = valorEmReal.toFixed(2);

valorEmRealEuro = valorEmEuro * cotacaoEuro;

valorEmRealLibra = valorEmLibra * cotacaoLibra;

valorEmRealIene = valorEmIene * cotacaoIene;

alert(valorEmDolar + " Dólares para Reais - R$ " + valorEmRealDolar);
alert(valorEmEuro + " Euro para Reais - R$ " + valorEmRealEuro);
alert(valorEmLibra + " Libra para Reais - R$ " + valorEmRealLibra);
alert(valorEmIene + " Iene para Reais - R$ " + valorEmRealIene);