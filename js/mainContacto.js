const letraCampos = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos){
        if ((campo.type != "reset") || (campo.type != "submit")){
            campo.addEventListener("keyup", ()=> {
                campo.className = "campoNegrita"
            })
        }
    }
}

letraCampos();
