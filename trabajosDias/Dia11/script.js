let nameImg = document.getElementById("imagen")
nameImg.addEventListener("mouseover", mostrarName)

let emailImg = document.getElementById("imagen2")
emailImg.addEventListener("mouseover", mostrarEmail)

let telefono_Img = document.getElementById("imagen3")
telefono_Img.addEventListener("mouseover", mostrarTelefono)

let calendario_Img = document.getElementById("imagen4")
calendario_Img.addEventListener("mouseover", mostrarCalendario)

let locacion_Img = document.getElementById("imagen5")
locacion_Img.addEventListener("mouseover", mostrarLugar)

let contraseña_Img = document.getElementById("imagen6")
contraseña_Img.addEventListener("mouseover", mostrarContraseña)


let random

fetch("https://randomuser.me/api/")
.then(res => res.json())
.then(data=>{
    random=data
    console.log(random);

    document.getElementById("Contfoto").innerHTML =""
    document.getElementById("Contfoto").innerHTML =`
        <img src="${random.results[0]["picture"]["large"]}" alt="" id="img">
    `
    mostrarName()
})
function mostrarName() {
    let nombre= random.results[0]["name"]
    document.getElementById("contdaticos").innerHTML =""
    document.getElementById("contdaticos").innerHTML = `
        <div id="introName">Hi, My name is</div>
        <div id="name">${nombre.first} ${random.results[0]["name"].last}</div>
    `
    nameImg.style ="background-position-y: -0.1vw;"
    emailImg.style ="background-position-y: -6rem;"
    telefono_Img.style ="background-position-y: -6rem;"
    calendario_Img.style ="background-position-y: -6rem;"
    locacion_Img.style ="background-position-y: -6rem;"
    contraseña_Img.style ="background-position-y: -6rem;"
}
function mostrarEmail() {
    
    document.getElementById("contdaticos").innerHTML =""
    document.getElementById("contdaticos").innerHTML = `
        <div id="introName">My email address is</div>
        <div id="name">${random.results[0]["email"]}</div>
    `
    emailImg.style ="background-position-y: -0.1vw;"
    nameImg.style ="background-position-y: 6.1rem"
    telefono_Img.style ="background-position-y: -6rem;"
    calendario_Img.style ="background-position-y: -6rem;"
    locacion_Img.style ="background-position-y: -6rem;"
    contraseña_Img.style ="background-position-y: -6rem;"
    
}

function mostrarTelefono() {
    document.getElementById("contdaticos").innerHTML =""
    document.getElementById("contdaticos").innerHTML = `
        <div id="introName">My phone number is</div>
        <div id="name">${random.results[0]["phone"]}</div>
    `
    telefono_Img.style ="background-position-y: -0.1vw;"
    emailImg.style ="background-position-y: -6rem;"
    calendario_Img.style ="background-position-y: -6rem;"
    locacion_Img.style ="background-position-y: -6rem;"
    contraseña_Img.style ="background-position-y: -6rem;"
    nameImg.style ="background-position-y: -6rem;"
}

function mostrarCalendario() {
    document.getElementById("contdaticos").innerHTML =""
    document.getElementById("contdaticos").innerHTML = `
        <div id="introName">My birthday is</div>
        <div id="name">${random.results[0]["dob"].date}</div>
    `
    calendario_Img.style ="background-position-y: -0.1vw;"
    emailImg.style ="background-position-y: -6rem;"
    telefono_Img.style ="background-position-y: -6rem;"
    nameImg.style ="background-position-y: -6rem;"
    locacion_Img.style ="background-position-y: -6rem;"
    contraseña_Img.style ="background-position-y: -6rem;"
}

function mostrarLugar() {
    document.getElementById("contdaticos").innerHTML =""
    document.getElementById("contdaticos").innerHTML = `
        <div id="introName">My address is</div>
        <div id="name">${random.results[0]["location"].postcode} ${random.results[0]["location"].city}</div>
    `
    locacion_Img.style ="background-position-y: -0.1vw;"
    emailImg.style ="background-position-y: -6rem;"
    telefono_Img.style ="background-position-y: -6rem;"
    calendario_Img.style ="background-position-y: -6rem;"
    contraseña_Img.style ="background-position-y: -6rem;"
    nameImg.style ="background-position-y: -6rem;"
}

function mostrarContraseña() {
    document.getElementById("contdaticos").innerHTML =""
    document.getElementById("contdaticos").innerHTML = `
        <div id="introName">My password is</div>
        <div id="name">${random.results[0]["login"].password}</div>
    `
    contraseña_Img.style ="background-position-y: -0.1vw;"
    emailImg.style ="background-position-y: -6rem;"
    telefono_Img.style ="background-position-y: -6rem;"
    calendario_Img.style ="background-position-y: -6rem;"
    locacion_Img.style ="background-position-y: -6rem;"
    nameImg.style ="background-position-y: -6rem;"
}