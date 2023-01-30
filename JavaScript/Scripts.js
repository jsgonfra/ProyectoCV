
document.getElementById("person_img").onmouseover = function() {
    console.log("capturamos el evento click")
    document.getElementById("dato").innerHTML = "Carlos Sanches"
    document.getElementById("person_img").style.opacity = "1.0";
}

document.getElementById("person_img").onmouseleave = function() {
    console.log("capturamos el evento click")
    document.getElementById("person_img").style.opacity = "0.5";
}


document.getElementById("mail_img").onmouseover = function() {
    console.log("capturamos el evento click")
    document.getElementById("dato").innerHTML = "Carlos.Sanches@gmail.com"
    document.getElementById("mail_img").style.opacity = "1.0";
}

document.getElementById("mail_img").onmouseleave = function() {
    console.log("capturamos el evento click")
    document.getElementById("mail_img").style.opacity = "0.5";
}

document.getElementById("phone_img").onmouseover = function() {
    console.log("capturamos el evento click")
    document.getElementById("dato").innerHTML = "0800-0000-0000"
    document.getElementById("phone_img").style.opacity = "1.0";
}

document.getElementById("phone_img").onmouseleave = function() {
    console.log("capturamos el evento click")
    document.getElementById("phone_img").style.opacity = "0.5";
}

document.getElementById("address_img").onmouseover = function() {
    console.log("capturamos el evento click")
    document.getElementById("dato").innerHTML = "Juan de los palotes 2020. La Quiaca"
    document.getElementById("address_img").style.opacity = "1.0";
}

document.getElementById("address_img").onmouseleave = function() {
    console.log("capturamos el evento click")
    document.getElementById("address_img").style.opacity = "0.5";
}