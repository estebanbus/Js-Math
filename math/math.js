console.group('cuadrado')

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularTriangulo(lado){
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
}

console.groupEnd('cuadrado')

console.group('triangulo')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura){
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

function calcularAlturaTriangulo (lado1, base){
    if (lado1 == base){
        console.warn('Este no es triangulo isosceles')
    } else {
        return Math.sqrt( Math.pow(lado1, 2) - ((base ** 2)) / 4 )
    }
}
console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
})
console.groupEnd('triangulo')

console.group('circulo')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const circunferencia = diametroCirculo * Math.PI;
const areaCirculo = (radioCirculo ** 2) * Math.PI;

console.log ({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
});

function calcularCircle(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2)

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    };
}

console.groupEnd('circulo')