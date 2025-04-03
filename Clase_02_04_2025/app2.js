console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb").textContent);
console.log(document.getElementById("tituloWeb").innerHTML);

function changeColor(newcolor){
    const elem = document.getElementById("tituloWeb");
    elem.style.color = newcolor;
}


