var lado1 = Number(prompt('Informe o primeiro lado do triângulo: '));
var lado2 = Number(prompt('Informe o segundo lado do triângulo: '));
var lado3 = Number(prompt('Informe o terceiro lado do triângulo: '));

if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
    alert('É um triângulo.');
    if(lado1 === lado2 && lado1 === lado3){
        alert('Triângulo equilátero (todos os lados iguais).');
    }
    else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        alert("Triângulo isósceles (apenas dois lados iguais).");
    }
    else{
        alert("Triângulo escaleno (todos os lados diferentes).");
    }
}
else {
    alert("Os lados não podem formar um triângulo.");
}