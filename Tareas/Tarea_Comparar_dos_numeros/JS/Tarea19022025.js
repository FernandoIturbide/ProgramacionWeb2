let numero1=parseInt(prompt("Introduce el primer número"));
let numero2=parseInt(prompt("Introduce el segundo número"));
console.log("Número 1: "+numero1);
console.log("Número 2: "+numero2);
if(numero1>numero2){
    console.log("El numero1 ("+numero1+") es mayor que numero2 ("+numero2+")");
}else if(numero1<numero2){
    console.log("El numero2 ("+numero2+") es mayor que numero1 ("+numero1+")");
}else if(numero1===numero2){
    console.log("El numero1 ("+numero1+") es igual que numero2 ("+numero2+")");
}
