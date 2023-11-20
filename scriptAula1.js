// Aula 1 - Com exercício sugerido por IA

// Solicita ao usuário os valores a serem convertidos
let valorEmDolar = parseFloat(prompt("Digite o valor em Dólares:"));
let valorEmEuro = parseFloat(prompt("Digite o valor em Euros:"));
let valorEmLibra = parseFloat(prompt("Digite o valor em Libras:"));
let valorEmIene = parseFloat(prompt("Digite o valor em Ienes:"));

// Define as taxas de câmbio
let cotacaoDolar = 4.85;
let cotacaoEuro = 5.29;
let cotacaoLibra = 6.05;
let cotacaoIene = 0.032;

// Calcula os valores em reais
let valorEmRealDolar = (valorEmDolar * cotacaoDolar).toFixed(2);
let valorEmRealEuro = valorEmEuro * cotacaoEuro;
let valorEmRealLibra = valorEmLibra * cotacaoLibra;
let valorEmRealIene = valorEmIene * cotacaoIene;

// Exibe os resultados para o usuário em uma única mensagem
let resultado = `
${valorEmDolar} Dólares para Reais - R$ ${valorEmRealDolar}
${valorEmEuro} Euro para Reais - R$ ${valorEmRealEuro.toFixed(2)}
${valorEmLibra} Libra para Reais - R$ ${valorEmRealLibra.toFixed(2)}
${valorEmIene} Iene para Reais - R$ ${valorEmRealIene.toFixed(2)}
`;

alert(resultado);


