
/* estado = false;
for(const i = 0; i < 10; i++) {
    console.log(i);
} */
const estado = true;

if (estado) {
    const estado = false;
    console.log(estado);
}
console.log(estado); // true

const frutas = ["Banana"];
frutas.push("Manzana");
console.log(frutas); // ["Banana", "Manzana"]

const fruta = ["Banana"];
fruta.unshift("Manzana");
console.log(fruta); // ["Manzana", "Banana"]

const frutaELiminada = fruta.pop();
console.log(fruta); // ["Manzana"]
console.log(frutaELiminada); // "Banana"

