var num = Number(prompt('Insira um valor: '));
var operacao = prompt('Insira uma operação (+, -, *, /): ');
var num2 = Number(prompt('Insira outro valor: '));

switch (operacao) {
    case '+':
        soma = num + num2;
        alert('A soma é: ' + soma);
        break;

    case '-':
        subtracao = num - num2;
        alert('A subtração é: ' + subtracao);
        break;

    case '*':
        multiplicacao = num * num2;
        alert('A multiplicação é: ' + multiplicacao);
        break;

    case '/':
        divisao = num / num2;
        alert('A divisão é: ' + divisao);
        break;

    default:
        alert('Operador inválido.');
}