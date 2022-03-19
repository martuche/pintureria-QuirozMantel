const btnTienda = document.getElementById("btnTienda")
btnTienda.onclick = () => {console.log("Click")}

class Interior {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const latex = new Interior("Pintura Latex", 550);
const sintetico = new Interior("Pintura Esmalte Sintetico", 500);
const metalizada = new Interior("Pintura Metalizada", 2000);

//Creo un nuevo array donde simulo que es un carrito de compras
const carrito = [];

function porLitro(cantidad, precio, nombre) {
    let costo = parseInt(cantidad) * precio;
    alert("La " + nombre + " por " + cantidad + " litros: $" + parseFloat(costo));
    carrito.push({pintura: nombre, totalParcial: parseFloat(costo)});

}

function tipoInterior(numero) {
    if (numero == "1") {
        let litros = prompt("Elegiste pintura al latex, ingrese la cantidad de litros que necesita");
        porLitro(litros, latex.precio, latex.nombre);
    } else if (numero == "2") {
        let litros = prompt("Elegiste pintura al esmalte sintetico, ingrese la cantidad de litros que necesita");
        porLitro(litros, sintetico.precio, sintetico.nombre);
    } else if (numero == "3") {
        let litros = prompt("Elegiste pintura al esmalte sintetico METALIZADA, ingrese la cantidad de litros que necesita");
        porLitro(litros, metalizada.precio, metalizada.nombre);
    } else {
        alert("No contenemos esa pintura");
    }
}

let rta = prompt("Bienvenidxs, quiere elegir un tipo de pintura? Ingrese 1 para SI o ingrese 0 para SALIR");
while (rta == "1") {
    let numero = prompt("Que tipo de pintura de pared Interior necesita? 1= Latex, 2= Sintetico, 3= Metalizada (Seleccione 1, 2 o 3)");
    tipoInterior(numero);
    rta = prompt("Quiere elegir otra pintura? 1 = SI / 2 = IR AL CARRITO");
}

//Si no quiero seguir comprando, se muestran los elementos que estan en el carrito
if (rta == 2){
    for (const producto of carrito){
        alert(producto.pintura + ": " + producto.totalParcial);
    }
    //Pregunto si quiere proceder al pago del carrito, y sumo el total
    let pregunta = prompt("Quiere proceder a pagar el monto total? 1 = SI / 0 = NO");
    if (pregunta == "1"){
        const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.totalParcial, 0)
        alert("El monto total es de: " + parseFloat(total));
    }
}
