const leerButton2 = document.getElementById("leer");
leerButton2.addEventListener("click", verDatos2);

let datosJSon= []
fetch("Datos.json")
.then(i => i.json())
.then(ver => {
    datosJSon.push(ver)
})

function verDatos2() {
    cont=1
    fetch("Datos.json")
    .then(i => i.json())
    .then(ver => {
        const suppliers = ver.suppliers;
        for(let i = 0; i < suppliers.length; i++) {
            const supplier = suppliers[i];
            document.getElementById("output").innerHTML += `
            <h1>-----Provedor ${cont}----</h3>
            <h3>Supplier Id: ${supplier.id}</h3>
            <h3>Supplier Name: ${supplier.name}</h3>
            <h3>Contact Info:</h2>
            <ul>
            `;
            for(let j = 0; j < supplier.contactInfo.length; j++) {
                const contact = supplier.contactInfo[j];
                document.getElementById("output").innerHTML += `
                <li>Phone: ${contact.phone}</li>
                <li>Email: ${contact.email}</li>
                <li>Address: ${contact.address}</li>
                ------------
                `;
                cont=cont+1
            }
            document.getElementById("output").innerHTML += `</ul>`;
        }
    })
}


//crear
const ver=document.getElementById("crear")
const CrearFormulario=document.getElementById("formularioCrear")
const enviarCrear=document.getElementById("enviar")
//inputs


ver.addEventListener("click", funcionCrear)
function funcionCrear(){
    CrearFormulario.style.display = "block"
}

enviarCrear.addEventListener("click", opcionCrear)
function opcionCrear() {
    console.log(datosJSon);
    
    const idValue = document.getElementById("id").value;
    const nameValue = document.getElementById("name").value;
    const phoneValue = document.getElementById("phone").value;
    const priceValue = document.getElementById("email").value;
    const addressValue = document.getElementById("address").value;

    const productoNuevo = {
        "id": idValue,
        "name": nameValue,
        "contactInfo": [
            {
                "phone": phoneValue,
                "email": priceValue,
                "address": addressValue
            }
        ]
    };
    datosJSon[0].suppliers.push(productoNuevo);
    console.log(datosJSon);
}