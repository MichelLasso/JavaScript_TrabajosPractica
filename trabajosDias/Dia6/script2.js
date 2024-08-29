const leerButton2 = document.getElementById("leer"); //opción leer
leerButton2.addEventListener("click", verDatos2); //activar función al presionar el botón

let datosJSon= []
fetch("Datos.json")
.then(i => i.json())
.then(ver => {
    datosJSon.push(ver)
})

function verDatos2() {
    var cont=1
    for(i in datosJSon[0].suppliers){
        document.getElementById("output").innerHTML +=`
        <h1>-----Provedor ${cont}----</h3>
        <h3>Supplier Id: ${datosJSon[0].suppliers[i].id}</h3>
        <h3>Supplier Name: ${datosJSon[0].suppliers[i].name}</h3>
        <h3>Contact Info:</h2>
        <ul>
        `;
        const contactInfo = datosJSon[0].suppliers[i].contactInfo;
        for(a in contactInfo){
            document.getElementById("output").innerHTML += `
                <li>Phone: ${contactInfo[a].phone}</li>
                <li>Email: ${contactInfo[a].email}</li>
                <li>Address: ${contactInfo[a].address}</li>
                ------------
                `;
        }
        cont=cont+1
    }
}

//crear
const ver=document.getElementById("crear")
const CrearFormulario=document.getElementById("formularioCrear")
const enviarCrear=document.getElementById("enviar")
//función al presionar crear
ver.addEventListener("click", funcionCrear)
//aparecer la información
function funcionCrear(){
    CrearFormulario.style.display = "block"
}
//guardar los datos del usuario al presinar el botón
enviarCrear.addEventListener("click", opcionCrear)

function opcionCrear() {
    //los inputs deben estar dentro de la función
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

//eliminar provedores

//guardar en variables las actividades del html
const verEliminar= document.getElementById("eliminar");
const  formulario= document.getElementById("eliminarEnter")
const botonEli = document.getElementById("btonEliminar");

//se crea una a partir de la actividad click en el html se activa la función
verEliminar.addEventListener("click", verEli);

//mostrar el formulario
function verEli(){
    formulario.style.display = "block"   
}

//actividad del html y se realiza la función que crea el dato 
botonEli.addEventListener("click", borrar)

//la función de crear
function borrar() {

    var idinput= document.getElementById("idEliminar").value;;
    const indice = datosJSon[0].suppliers.findIndex(producto => producto.id === parseInt(idinput));
    
    if (indice !== -1) {

        datosJSon[0].suppliers.splice(indice, 1)
        //console.log(datosJSon[0].suppliers);mostrar el json para comprobar
        
        alert("Provedor Eliminado con Exito")
    } else {

        alert("No se encontró el provedor con el ID ingresado");

    }
}

//Actualizar
//guardar en variables las actividades del html
const aparecer=document.getElementById("formularioActualizar")
const botonEnviar=document.getElementById("actualizarProducto")
const botonActu= document.getElementById("actualizar")


botonEnviar.addEventListener("click", actualizarProducto)
botonActu.addEventListener("click", funcionVerFor)

function funcionVerFor(){
    aparecer.style.display= "block"
}
function actualizarProducto() {

    const supplierIdValue = document.getElementById("supplierId").value;
    const idValue = document.getElementById("id").value;
    const nameValue = document.getElementById("name").value;
    const contactInfo_phoneValue = document.getElementById("contactInfo_phone").value;
    const contactInfo_emailValue = document.getElementById("contactInfo_email").value;
    const contactInfo_addressValue = document.getElementById("contactInfo_address").value;

    const suppliers = datosJSon[0].suppliers;
    let Edit = suppliers.filter(Edit => Edit.id == supplierIdValue) 
    console.log(Edit[0].name);

    if (Edit) {
        Edit[0].id = idValue;
        Edit[0].name = nameValue;
        Edit[0].contactInfo.phone = contactInfo_phoneValue;
        Edit[0].contactInfo.email = contactInfo_emailValue;
        Edit[0].contactInfo.address = contactInfo_addressValue;
    
      // Actualizar el array de proveedores en localStorage
        datosJSon[0].suppliers = suppliers;

        alert("Proveedor actualizado con éxito!");
    } else {
        alert("Proveedor no encontrado");
    }
}