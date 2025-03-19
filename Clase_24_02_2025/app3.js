/* function name(argumentod){
    logica
} */
/* saludar(); // las funciones son las primeras en cargar
function saludar(){
    alert('Hola a mundo');
}

saludar(); // Basica ejecucion de la funcion */

function saludar(Nombre){
    return 'Mi nombre es: ' + Nombre;
}
console.log(saludar('Fernando')); // Mi nombre es: Fernando

function saludar2(Nombre){
    alert('Mi nombre es: ' + Nombre);
}
Nombre = prompt('Ingrese su nombre');
saludar2(Nombre); // Mi nombre es: Fernando