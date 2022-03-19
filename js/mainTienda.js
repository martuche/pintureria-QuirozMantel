//CARGO LOS PRODUCTOS

const cargarPinturas = () => {
    for (pintura of pinturas){
        const liPintura = document.createElement("li")
        liPintura.className = "pinturaTienda"
        liPintura.innerText = pintura
        listadoPinturas.append(liPintura)
    }

}

const cargarSuperficies = () => {
    for (superficie of superficies){
        const liSuperficie = document.createElement("li")
        liSuperficie.className = "superficieTienda"
        liSuperficie.innerText = superficie
        listadoSuperficies.append(liSuperficie)
    }
}

const cargarAccesorios = () => {
    for (accesorio of accesorios){
        const liAccesorio = document.createElement("li")
        liAccesorio.className = "accesorioTienda"
        liAccesorio.innerText = accesorio
        listadoAccesorios.append(liAccesorio)
    }
}

cargarPinturas();
cargarSuperficies();
cargarAccesorios();