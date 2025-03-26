const frutas = [];
const fruta = prompt("Ingrese la fruta que quiere comprar: ");
frutas.push(fruta);
while (confirm("¿Quiere ingresar otra fruta?")) {
    const fruta = prompt("Ingrese la fruta que quiere comprar: ");
    frutas.push(fruta);
}
console.log("Usted compró las siguientes frutas: ");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//for in y for of

for (const fruta of frutas) {
    console.log(fruta);
}

for (const i in frutas) {
    console.log(frutas[i]);
}