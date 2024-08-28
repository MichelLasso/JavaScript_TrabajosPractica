const leerButton3= document.getElementById("leer");
leerButton3.addEventListener("click", verDatos3);

let datosJSon= [];

fetch("Datos.json")
.then(i => i.json())
.then(ver => {
    datosJSon.push(ver)
})
function verDatos3() {
    cont=1
    const orders= ver.orders;
    for(let i =0; i <orders.length; i++){
        const order= orders[i]
        document.getElementById("output").innerHTML +=`
        <h1>------Orders ${cont}--------</h1>
        <h3>order Id: ${order.orderId}</h3>
        <h3>product Id: ${order.productId}</h3>
        <h3>quantity: ${order.quantity}</h3>
        <h3>order Date: ${order.orderDate}</h3>
        <h3>status: ${order.status}</h3>
        -------------------
        `
        cont=cont+1
    }
}

const ver = document.getElementById("crear");
const CrearFormulario = document.getElementById("formularioCrear");
const enviarCrear = document.getElementById("enviar");

ver.addEventListener("click", funcionCrear);

function funcionCrear() {
  CrearFormulario.style.display = "block";
}

enviarCrear.addEventListener("click", opcionCrear);

function opcionCrear() {
  // inputs
    const idValue = document.getElementById("orderId").value;
    const nameProValue = document.getElementById("productId").value;
    const quantityValue = document.getElementById("quantity").value;
    const dateValue = document.getElementById("orderDate").value;
    const status = document.getElementById("status").value;

    const productoNuevo = {
      "orderId": idValue,
      "productId": nameProValue,
      "quantity": quantityValue,
      "orderDate": dateValue,
      "status": status
  }
  
  console.log(datosJSon);
  datosJSon[0].orders.push(productoNuevo);
  console.log(productoNuevo);
    
}