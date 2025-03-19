let frutas = ['Manzana', 'Banana','Palta','Mango'];
console.log(frutas);

for (let i=0; i<frutas.length; i++){
    console.log("Fruta "+(i+1)+": "+frutas[i]);
}
for (const fruta of frutas) {
    console.log(fruta);
}
for (const fruta in frutas) {
    console.log(fruta);
}
