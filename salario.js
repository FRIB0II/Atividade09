var salario_atual = Number(prompt('Insira o salário atual: '));

if (salario_atual > 1.00 && salario_atual <= 280.00) {
    aumento = salario_atual * 0.2;
    salario_ajustado = salario_atual + aumento;
    alert('Salário antes do reajuste: R$' + salario_atual + '\nPercentual de aumento: 20% \nValor do aumento: R$' + aumento + '\nSalário após reajuste: R$' + salario_ajustado);
}
else if (salario_atual > 280.00 && salario_atual <= 700.00) {
    aumento = salario_atual * 0.15;
    salario_ajustado = salario_atual + aumento;
    alert('Salário antes do reajuste: R$' + salario_atual + '\nPercentual de aumento: 15% \nValor do aumento: R$' + aumento + '\nSalário após reajuste: R$' + salario_ajustado);
}
else if (salario_atual > 700.00 && salario_atual <= 1500.00) {
    aumento = salario_atual * 0.10;
    salario_ajustado = salario_atual + aumento;
    alert('Salário antes do reajuste: R$' + salario_atual + '\nPercentual de aumento: 10% \nValor do aumento: R$' + aumento + '\nSalário após reajuste: R$' + salario_ajustado);
}
else if (salario_atual > 1500.00) {
    aumento = salario_atual * 0.05;
    salario_ajustado = salario_atual + aumento;
    alert('Salário antes do reajuste: R$' + salario_atual + '\nPercentual de aumento: 5% \nValor do aumento: R$' + aumento + '\nSalário após reajuste: R$' + salario_ajustado);
}