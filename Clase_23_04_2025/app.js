function agregarPantalla(value) {
    document.getElementById("pantalla").value+=value;
}

function limpiarPantalla() {
    document.getElementById("pantalla").value="";
}

function calcular() {
    try{
        let resultado = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value=resultado;
    }catch{
        document.getElementById("pantalla").value="Error";
    }
}
