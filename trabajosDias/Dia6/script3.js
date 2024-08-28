const leerButton3= document.getElementById("leer");
leerButton3.addEventListener("click", verDatos3)

function verDatos3() {
    cont=1
    fetch("Datos.json")
    .then(i => i.json())
    .then(ver => {
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
    })
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
    const idValue = document.getElementById("id").value;
    const nameValue = document.getElementById("name").value;
    const categoryValue = document.getElementById("category").value;
    const priceValue = document.getElementById("price").value;
    const quantityInStockValue = document.getElementById("quantityInStock").value;

  if (idValue && nameValue && categoryValue && priceValue && quantityInStockValue) {
    const productoNuevo = {
      id: idValue,
      name: nameValue,
      category: categoryValue,
      price: priceValue,
      quantityInStock: quantityInStockValue
    };

    let datos = localStorage.getItem("Datos.json");
    if (datos) {
      datos = JSON.parse(datos);

    datos.orders.push(productoNuevo);
    console.log(productoNuevo);

    localStorage.setItem("Datos.json", JSON.stringify(datos));
    console.log(datos);
  } else {
    console.error("Faltan valores");
  }
}