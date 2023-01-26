/*
document.getElementById("boton").onmouseover = function() {
    console.log("capturamos el evento click")
    document.getElementById("demo").innerHTML = "Estoy probando JS en HTML"
}

document.getElementById("boton").onmouseleave = function() {
    document.getElementById("demo").innerHTML = "Estamos aprendiendo JavaScript"
}


function iconosdatos (id_icono, texto) {
    document.getElementById("id_icono").onmouseover = function() {
        console.log("capturamos el evento click")
        document.getElementById("demo").innerHTML = texto
    }
}

function iconos_datos (person_img, Carlos)
*/

document.getElementById("person_img").onmouseover = function() {
    console.log("capturamos el evento click")
    document.getElementById("dato").innerHTML = "Carlos Sanches"
}

document.getElementById("mail_img").onmouseover = function() {
    console.log("capturamos el evento click")
    document.getElementById("dato").innerHTML = "Carlos.Sanches@gmail.com"
}
document.getElementById("phone_img").onmouseover = function() {
    console.log("capturamos el evento click")
    document.getElementById("dato").innerHTML = "0800-0000-0000"
}
document.getElementById("address_img").onmouseover = function() {
    console.log("capturamos el evento click")
    document.getElementById("dato").innerHTML = "Juan de los palotes 2020. La Quiaca"
}