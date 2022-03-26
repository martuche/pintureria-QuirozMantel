//Guardo datos del inicio sesion provisoriamente en CONTACTO

const envioDatos = () => {
    sessionStorage.setItem("mail", mail.value)
    sessionStorage.setItem("password", password.value)
}

btnSesion.addEventListener("click", envioDatos)

