const guardados = JSON.parse(localStorage.getItem("listaPinturas"));

document.querySelector("#listadoPinturas").innerHTML = JSON.stringify(arrPinturas)
