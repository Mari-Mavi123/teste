lupa = document.getElementById("lupa")

caixaPesquisa = document.getElementById("caixaPesquisa")
caixaPesquisa.style.visibility = "hidden"

lupa.addEventListener("click",abrir)

function abrir(){
    if  (caixaPesquisa.style.visibility == "hidden"){   
        caixaPesquisa.style.visibility = "visible"
        caixaPesquisa.focus()
}else{
        caixaPesquisa.style.visibility = "hidden"

}
}
