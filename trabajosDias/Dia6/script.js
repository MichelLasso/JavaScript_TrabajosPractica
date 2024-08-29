const leerButton = document.getElementById("leer");
leerButton.addEventListener("click", verDatos);

let datosJSon= [];

fetch("Datos.json")
.then(i => i.json())
.then(ver => {
    datosJSon.push(ver)
    
    
})

function verDatos() {
    var cont=1
    console.log(datosJSon);
    for (i in datosJSon[0].products){
        document.getElementById("output").innerHTML +=`
        <h1>-----Productos ${cont}----</h3>
        <h3>id: ${datosJSon[0].products[i]["id"]} </h3>
        <h3>name: ${datosJSon[0].products[i]["name"]} </h3>
        <h3>category: ${datosJSon[0].products[i]["category"]} </h3>
        <h3>price: ${datosJSon[0].products[i]["price"]} </h3>
        <h3>quantity In Stock: ${datosJSon[0].products[i]["quantityInStock"]} </h3>
        <h3>supplier Id: ${datosJSon[0].products[i]["supplierId"]} </h3>
        
        `
        cont=cont+1
    }
    
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
    const indice = datosJSon[0]["products"].findIndex(producto => producto.id === parseInt(idinput));
    
    if (indice !== -1) {
        datosJSon[0]["products"].splice(indice, 1)
        console.log(datosJSon[0]["products"]);
        alert("Producto Eliminado con Exito")
    } else {
        alert("No se encontró el producto con el ID ingresado");
    }
}



//crear
const ver=document.getElementById("crear")
const CrearFormulario=document.getElementById("formularioCrear")
const enviarCrear=document.getElementById("enviar")

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
    
    datosJSon[0].products.push(productoNuevo);
    console.log(datosJSon);
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

    const productos = datosJSon[0].products;
    let Edit = productos.filter(Editar => Editar.id == idActualizarValue) 
    console.log(Edit[0].name);

    if (Edit) {
        Edit[0].name = nameActualizarValue;
        Edit[0].category = categoryActualizarValue;
        Edit[0].price = priceActualizarValue;
        Edit[0].quantityInStock = quantityInStockActualizarValue;
        Edit[0].supplierId = supplierIdActualizarValue;
    
      // Actualizar el array de productos en localStorage
        datosJSon[0].products = productos;

        alert("Producto actualizado con éxito!");
    } else {
        alert("Producto no encontrado");
    }
}