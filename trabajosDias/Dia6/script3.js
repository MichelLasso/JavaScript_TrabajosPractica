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