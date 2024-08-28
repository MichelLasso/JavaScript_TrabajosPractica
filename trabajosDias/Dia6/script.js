const leerButton = document.getElementById("leer");
leerButton.addEventListener("click", verDatos);

function verDatos() {
    cont=1
    fetch("Datos.json")
    .then(i => i.json())
    .then(ver => {
        const products = ver.products; // Access the products array
        for(let i = 0; i < products.length; i++) {
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
            cont=cont+1
        }
    })
}

const crear= document.getElementById("crear");
const contInput= document.getElementById("inputs");
crear.addEventListener("click", funcionCrear);


function funcionCrear() {
    contInput.style.display="block";
    fetch("Datos.json")
    .then(i => i.json())
    .then(datos => {
        // Obtener los valores de los input dinámicos
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const quantityInStock = document.getElementById("quantityInStock").value;
    const supplierId = document.getElementById("supplierId").value;
    
    // Crear un nuevo objeto JSON
    const newProduct = {
        "id": id,
        "name": name,
        "category": category,
        "price": price,
        "quantityInStock": quantityInStock,
        "supplierId": supplierId
    };
    
    // Agregar el nuevo objeto JSON a un array de productos
    datos.push(newProduct);
    }
)
    
    
}
    
