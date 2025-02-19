let numeroMaquina = Math.floor(Math.random()*(10 - 1) - 1);

let numeroUser = parseInt(prompt("Adivina el número de 1 a 10"));
console.log(numeroMaquina);
let vidas = 5;
while (numeroUser!=numeroMaquina && vidas>1) {
    vidas--;
    console.log("Número incorrecto, tus vidas son: "+vidas);
    numeroUser = parseInt(prompt("Número incorrecto, intenta de nuevo"));
}
if (numeroMaquina===numeroUser) {
    console.log("Ganaste");
    alert("Ganaste");
}else{
    console.log("Perdiste");
    alert("Perdiste");
}