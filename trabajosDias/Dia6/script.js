const leerButton = document.getElementById("leer");
leerButton.addEventListener("click", verDatos);

function verDatos() {
    cont = 1;
    const datos = JSON.parse(localStorage.getItem("Datos.json"));
    if (datos) {
        const products = datos.products; 
        document.getElementById("output").innerHTML = ""; 
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            document.getElementById("output").innerHTML += `
            -                -                  -
            <h1> Producto ${cont}</h1>
            <h4>Id: ${product.id}</h1>
            <h4>Name: ${product.name}</h1>
            <h4>Category: ${product.category}</h1>
            <h4>Price: ${product.price}</h1>
            <h4>Quantity In Stock: ${product.quantityInStock}</h1>
            <h4>Supplier Id: ${product.supplierId}</h1>
            -                -                  -
            `;
            cont = cont + 1;
        }
    } else {
        console.log("No hay datos en el almacenamiento local");
    }
}

//eliminar
const verEliminar= document.getElementById("eliminar");
const  formulario= document.getElementById("eliminarEnter")
const botonEli = document.getElementById("btonEliminar");
const idinput= document.getElementById("idEliminar");

verEliminar.addEventListener("click", verEli);
function verEli(){
    formulario.style.display = "block"   
}

botonEli.addEventListener("click", eliminarFuncion)
function eliminarFuncion(){
    const idEli = idinput.value;
    const datos = JSON.parse(localStorage.getItem("Datos.json"));
    if (datos) {
        const products = datos.products; // Accedemos al array de productos
        const eliminar = products.findIndex(i => i.id === parseInt(idEli));
        if (eliminar !== -1) {
            products.splice(eliminar, 1);
        }
        localStorage.setItem("Datos.json", JSON.stringify(datos));
        console.log(datos);
        verDatos()
    } else {
        console.log("No hay datos en el almacenamiento local");
        
    }
}

//crear
const ver=document.getElementById("crear")
const CrearFormulario=document.getElementById("formularioCrear")
const enviarCrear=document.getElementById("enviar")
//inputs
const idValue = document.getElementById("id").value;
const nameValue = document.getElementById("name").value;
const categoryValue = document.getElementById("category").value;
const priceValue = document.getElementById("price").value;
const quantityInStockValue = document.getElementById("quantityInStock").value;
const supplierIdValue = document.getElementById("supplierId").value;

ver.addEventListener("click", funcionCrear)
function funcionCrear(){
    CrearFormulario.style.display = "block"
}

enviarCrear.addEventListener("click", opcionCrear)
function opcionCrear() {
    const idValue = document.getElementById("id").value;
    const nameValue = document.getElementById("name").value;
    const categoryValue = document.getElementById("category").value;
    const priceValue = document.getElementById("price").value;
    const quantityInStockValue = document.getElementById("quantityInStock").value;
    const supplierIdValue = document.getElementById("supplierId").value;

    const productoNuevo = {
        id: idValue,
        name: nameValue,
        category: categoryValue,
        price: priceValue,
        quantityInStock: quantityInStockValue,
        supplierId: supplierIdValue
    };

    let datos = localStorage.getItem("Datos.json");
    if (datos) {
        datos = JSON.parse(datos);
    }

    datos.products.push(productoNuevo);
    console.log(productoNuevo);
    
    localStorage.setItem("Datos.json", JSON.stringify(datos));
    console.log(datos);
    
}

//actualizar
const aparecer=document.getElementById("formularioActualizar")
const botonEnviar=document.getElementById("actualizarProducto")
const botonActu= document.getElementById("actualizar")

botonEnviar.addEventListener("click", actualizarProducto)

botonActu.addEventListener("click", funcionVerFor)
function funcionVerFor(){
    aparecer.style.display= "block"
}
function actualizarProducto() {
    const idActualizarValue = document.getElementById("idActualizar").value;
    const nameActualizarValue = document.getElementById("nameActualizar").value;
    const categoryActualizarValue = document.getElementById("categoryActualizar").value;
    const priceActualizarValue = document.getElementById("priceActualizar").value;
    const quantityInStockActualizarValue = document.getElementById("quantityInStockActualizar").value;
    const supplierIdActualizarValue = document.getElementById("supplierIdActualizar").value;

    let datos = localStorage.getItem("Datos.json");
    datos = JSON.parse(datos);
    

    const productos = datos.products;
    const productoActualizar = productos.find(producto => producto.id === idActualizarValue);
    console.log(datos);

    if (productoActualizar) {
        productoActualizar.name = nameActualizarValue;
        productoActualizar.category = categoryActualizarValue;
        productoActualizar.price = priceActualizarValue;
        productoActualizar.quantityInStock = quantityInStockActualizarValue;
        productoActualizar.supplierId = supplierIdActualizarValue;
    
      // Actualizar el array de productos en localStorage
        datos.products = productos;
        localStorage.setItem("Datos.json", JSON.stringify(datos));
        console.log(datos);

        alert("Producto actualizado con éxito!");
    } else {
        alert("No se encontró el producto con el ID especificado");
    }
}