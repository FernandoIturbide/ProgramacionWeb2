document.getElementById('sumaForm').addEventListener('submit', 
    function(event){
        event.preventDefault(); // Evitar el envío del formulario
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let resultado = num1 + num2;
        console.log(resultado);
        document.getElementById('resultado').innerText = "La suma es: "+resultado;
        
    }
) ;