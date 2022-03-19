//ARREGLOS
const pinturas = ['Latex', 'Esmaltes', 'Impermeabilizantes', 'Texturas', 'Barnices', 'Pisos', 'Piletas', 'Entonadores']

const superficies = ['Fondos', 'Antioxidos', 'Fijadores', 'Enduidos', 'Diluyentes', 'Imprimacion']

const accesorios = ['Pintar', 'Diluyentes', 'Aerosoles', 'Lijas', 'Pinceles', 'Rodillos']

const carrito = []

//LISTADOS

const listadoPinturas = document.getElementById("listadoPinturas")
const listadoSuperficies = document.getElementById("listadoSuperficies")
const listadoAccesorios = document.getElementById("listadoAccesorios")
const listadoCarrito = document.getElementById("listadoCarrito")


//GENERO NUEVOS NODOS EN PRESENTACION Y DEFINO SU CLASE
const presentacion = document.getElementById("presentacion")
presentacion.innerHTML = "<p class='col-md-6'>ACA VA UNA PRESENTACION</p><ul class='col-md-6'><li>Lista1</li><li>Lista2</li></ul>"
presentacion.className = "row"

// //IMAGENES DE INICIO
// const imgInicio = document.getElementsByClassName("imgInicio")

