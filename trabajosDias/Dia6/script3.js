const leerButton3= document.getElementById("leer");
leerButton3.addEventListener("click", verDatos3);

let datosJSon= [];

fetch("Datos.json")
.then(i => i.json())
.then(ver => {
    datosJSon.push(ver)
})
function verDatos3() {
    var cont=1
    for(i in datosJSon[0].orders){
        document.getElementById("output").innerHTML +=`
        <h1>------Orders ${cont}--------</h1>
        <h3>order Id: ${datosJSon[0].orders[i].orderId}</h3>
        <h3>product Id: ${datosJSon[0].orders[i].productId}</h3>
        <h3>quantity: ${datosJSon[0].orders[i].quantity}</h3>
        <h3>order Date: ${datosJSon[0].orders[i].orderDate}</h3>
        <h3>status: ${datosJSon[0].orders[i].status}</h3>
        -------------------
        `
        cont=cont+1
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
    //almacenar los inputs del usuario
    const orderId = document.getElementById("idActualizar").value.trim();
    const productId = document.getElementById("productId").value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    const orderDate = document.getElementById("orderDate").value.trim();
    const status = document.getElementById("status").value.trim();
    console.log(quantity);
    
    //almacenar una parte especifica del json
    const order = datosJSon[0].orders;

    //comprobar si el id es igual
    let Edit = order.filter(Editar => Editar.orderId == orderId) 

    if (Edit) {
        //actualizar producto
        Edit[0].productId = productId;
        Edit[0].quantity = quantity;
        Edit[0].orderDate = orderDate;
        Edit[0].status = status;

        datosJSon[0].orders= order;
        alert("Producto actualizado con éxito!");
        console.log(datosJSon);
        

    } else {

        alert("Producto no encontrado");

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
    const idValue = parseInt(document.getElementById("orderId").value);
    const nameValue = parseInt(document.getElementById("productId").value);
    const phoneValue = parseInt(document.getElementById("quantity").value);
    const priceValue = document.getElementById("orderDate").value;
    const addressValue = document.getElementById("status").value;

    const productoNuevo = {
        "orderId": idValue,
        "productId": nameValue,
        "quantity": phoneValue,
        "orderDate": priceValue,
        "status": addressValue
    };
    datosJSon[0].orders.push(productoNuevo);
    alert("Datos Creados con éxito")
}

//eliminar

const verEliminar= document.getElementById("eliminar");
const  formulario= document.getElementById("eliminarEnter")
const botonEli = document.getElementById("btonEliminar");


verEliminar.addEventListener("click", verEli);
function verEli(){
    formulario.style.display = "block"   
}
botonEli.addEventListener("click", borrar)

function borrar() {
    var idinput= document.getElementById("idEliminar").value;;
    const indice = datosJSon[0]["orders"].findIndex(producto => producto.orderId === parseInt(idinput));
    
    if (indice !== -1) {
        datosJSon[0].orders.splice(indice, 1)
        console.log(datosJSon);
        alert("Producto Eliminado con Exito")
    } else {
        alert("No se encontró el producto con el ID ingresado");
    }
}
