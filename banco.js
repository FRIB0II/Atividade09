var saldo_inicial = Number(prompt('Informe seu saldo: '));
var valor_compra = Number(prompt('Informe o valor da compra: '));
var saldo_final = saldo_inicial - valor_compra;

if(valor_compra <= saldo_inicial){
    alert('Compra realizada com sucesso, o saldo da conta após a compra é de R$' + saldo_final);
}
else{
    alert('Saldo insuficiente.');
}
