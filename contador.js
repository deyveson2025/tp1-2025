const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isInteger(value) {
  return /^-?\d+$/.test(value);
}

function contarDeAte(inicio, fim) {
  if (inicio < fim) {
    for (let i = inicio; i <= fim; i++) {
      console.log(i);
    }
  } else {
    for (let i = inicio; i >= fim; i--) {
      console.log(i);
    }
  }
}

rl.question('Digite o primeiro número inteiro: ', (input1) => {
  if (!isInteger(input1)) {
    console.log('Erro: o valor digitado não é um número inteiro.');
    rl.close();
    return;
  }

  rl.question('Digite o segundo número inteiro: ', (input2) => {
    if (!isInteger(input2)) {
      console.log('Erro: o valor digitado não é um número inteiro.');
      rl.close();
      return;
    }

    const num1 = parseInt(input1, 10);
    const num2 = parseInt(input2, 10);
    contarDeAte(num1, num2);
    rl.close();
  });
});
