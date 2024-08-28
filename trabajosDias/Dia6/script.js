const leerButton = document.getElementById("leer");
leerButton.addEventListener("click", verDatos);

let datosJSon= [];

fetch("Datos.json")
.then(i => i.json())
.then(ver => {
    datosJSon.push(ver)
    
    
})

function verDatos() {
    
    if (datosJSon) {
        const products = datosJSon[0].products; 
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
var idinput= document.getElementById("idEliminar").value;;




verEliminar.addEventListener("click", verEli);
function verEli(){
    formulario.style.display = "block"   
}

botonEli.addEventListener("click", (e)=>{   
    eliminarFuncion(idinput)
})
function eliminarFuncion(id){
    const productos = datosJSon[0].products;
    productos = productos.filter(Eliminar => Eliminar.id !== id)
    console.log(productos)
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