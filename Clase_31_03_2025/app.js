let inventario = [];

function mostrarMenu() {
    let opcion = parseInt(prompt(
        "Funciones disponibles:\n" +
        "1. Agregar producto\n" +
        "2. Mostrar productos\n" +
        "3. Buscar producto por nombre\n" +
        "4. Salir\n" +
        "Ingrese una opción:"
    ));
    
    return isNaN(opcion) ? 0 : opcion; // Si no es un número, devuelve 0
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                continuar = false;
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }
    }
    alert("Programa finalizado.");
}

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

    if (precio > 0 && cantidad > 0) {
        let producto = { nombre, precio, cantidad };
        inventario.push(producto);
        alert("Producto agregado correctamente.");
    } else {
        alert("El precio y la cantidad deben ser mayores a 0.");
    }

    console.log("Inventario actualizado:", inventario);
}

function mostrarProductos() {
    if (inventario.length === 0) {
        alert("El inventario está vacío.");
    } else {
        let mensaje = "Productos del inventario:\n\n";
        for (let i = 0; i < inventario.length; i++) {
            mensaje +=  `Producto: ${i+1}`+
                        `\nNombre: ${inventario[i].nombre}` +
                        `\nPrecio: $${inventario[i].precio}` +
                        `\nCantidad: ${inventario[i].cantidad}\n\n`
                        "----------------------------------------";
        }
        alert(mensaje);
    }
}
function buscarProducto() {
    let nombre = prompt("Ingrese el nombre del producto a buscar:");
    let encontrado = false;

    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            alert(`Producto encontrado:\nNombre: ${inventario[i].nombre}\nPrecio: $${inventario[i].precio}\nCantidad: ${inventario[i].cantidad}`);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        alert("Producto no encontrado.");
    }
}

iniciarPrograma();

