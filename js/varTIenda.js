//ARREGLOS
const pinturas = ['Latex', 'Esmaltes', 'Impermeabilizantes', 'Texturas', 'Barnices', 'Pisos', 'Piletas', 'Entonadores']
const superficies = ['Fondos', 'Antioxidos', 'Fijadores', 'Enduidos', 'Diluyentes', 'Imprimacion']
const accesorios = ['Pintar', 'Diluyentes', 'Aerosoles', 'Lijas', 'Pinceles', 'Rodillos']
const carroCompras = []

const arrPinturas = [{
        id: 1,
        producto: 'Latex',
        precio: 500,
        stock: 20
    },
    {
        id: 2,
        producto: 'Esmaltes',
        precio: 500,
        stock: 10
    },
    {
        id: 3,
        producto: 'Impermeabilizantes',
        precio: 500,
        stock: 30
    }
]

const guardarArray = (clave, valor) => { localStorage.setItem(clave, valor);
}

guardarArray("listaPinturas", JSON.stringify(arrPinturas))



//LISTADOS


// const listadoPinturas = document.getElementById("listadoPinturas")
const listadoSuperficies = document.getElementById("listadoSuperficies")
const listadoAccesorios = document.getElementById("listadoAccesorios")
const listadoCarrito = document.getElementById("listadoCarrito")