
/*En el script se da funcionalidad a los iconos debajo de la foto de perfil
 para cuando el mouse esta sobre el icono y cuando sale de ensima del icono*/

document.getElementById("person_img").onmouseover = function() {
    console.log("captura el evento onmouseover")
    document.getElementById("dato").innerHTML = "Carlos Sanches"
    document.getElementById("person_img").style.opacity = "1.0";
}

document.getElementById("person_img").onmouseleave = function() {
    console.log("captura el evento onmouseleave")
    document.getElementById("person_img").style.opacity = "0.5";
}


document.getElementById("mail_img").onmouseover = function() {
    console.log("captura el evento onmouseover")
    document.getElementById("dato").innerHTML = "<a id='enlace' href='mailto:carlos.sanchez@gmail.com'>carlos.sanchez@gmail.com</a>"
    document.getElementById("mail_img").style.opacity = "1.0";
}

document.getElementById("mail_img").onmouseleave = function() {
    console.log("captura el evento onmouseleave")
    document.getElementById("mail_img").style.opacity = "0.5";
}

document.getElementById("phone_img").onmouseover = function() {
    console.log("captura el evento onmouseover")
    document.getElementById("dato").innerHTML = "<a href='tel:0800-0000-0000'>0800-0000-0000</a>"
    document.getElementById("phone_img").style.opacity = "1.0";
}

document.getElementById("phone_img").onmouseleave = function() {
    console.log("captura el evento onmouseleave")
    document.getElementById("phone_img").style.opacity = "0.5";
}

document.getElementById("address_img").onmouseover = function() {
    console.log("captura el evento onmouseover")
    document.getElementById("dato").innerHTML = "<a href='https://www.google.com/maps/place/8723+Chester+Forest+Ln,+Richmond,+VA+23237,+EE.+UU./@37.3983456,-77.4716261,17z/data=!3m1!4b1!4m5!3m4!1s0x89b10c01c77fe677:0x8a322ad249cc43b5!8m2!3d37.3983456!4d-77.4716261' target='_blank'>8723 Forest Ln</a>"
    document.getElementById("address_img").style.opacity = "1.0";
}

document.getElementById("address_img").onmouseleave = function() {
    console.log("captura el evento onmouseleave")
    document.getElementById("address_img").style.opacity = "0.5";
}