//Función declarativa

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numeroAleatorio(1, 11)); 

//Función expresada
//Función (expresada en una variable)
const miNumero = function(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
};
console.log(miNumero(11,32));

//Función flecha
const numero = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numero(32, 45));

//Función tradicional
function datos (a){
    return a + 100;
}

/* function (a){
    return a + 100;
} */

(a)=>{
    return a + 100;
}
var numero1 = (a) => a + 100;
var numero1 = a => a + 100;
var numeroRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(numeroRandom(1, 100));