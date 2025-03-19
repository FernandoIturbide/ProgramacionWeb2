function suma(n1,n2){
    return parseInt(n1) + parseInt(n2);
}
function resta(n1,n2){
    return parseInt(n1) - parseInt(n2);
}
function multiplicacion(n1,n2){
    return parseInt(n1) * parseInt(n2);
}
function division(n1,n2){
    return parseInt(n1) / parseInt(n2);
}
function modulo(n1,n2){
    return parseInt(n1) % parseInt(n2);
}


let operacion = prompt("Ingrese la operación a realizar: \n1.- suma\n2.- resta\n3.- multiplicacion\n4.- division\n5.-modulo)");
let numero1 = prompt("Ingrese un primer número"); 
let numero2 = prompt("Ingrese un segundo número");
let resultado = suma(numero1,numero2);
console.log("La suma de "+numero1+" y "+numero2+" es: "+resultado);

switch (operacion) {
    case "1":
        console.log("Suma");
        resultado = suma(numero1,numero2);
        break;
    case "2":
        console.log("Resta");
        resultado = resta(numero1,numero2);
        break;
    case "3":
        console.log("Multiplicación");
        resultado = multiplicacion(numero1,numero2);
        break;
    case "4":
        console.log("División");
        resultado = division(numero1,numero2);
        break;
    case "5":
        console.log("Módulo");
        resultado = modulo(numero1,numero2);
        break;
    default:
        console.log("Operación no válida");
        break;
}
console.log("El resultado de la operación es: "+resultado);