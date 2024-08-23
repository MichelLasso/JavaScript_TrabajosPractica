let DatosJson = [
    {
        "products": [
            {
                "id": 1,
                "name": "Laptop",
                "category": "Electronics",
                "price": 999.99,
                "quantityInStock": 50,
                "supplierId": 101
            }
        ],
        "suppliers": [
            {
                "id": 101,
                "name": "Tech Supplies Inc.",
                "contactInfo": {
                    "phone": "123-456-7890",
                    "email": "sales@techsupplies.com",
                    "address": "123 Tech Lane, Silicon Valley, CA"
                }
            }
        ],
        "orders": [
            {
                "orderId": 1001,
                "productId": 1,
                "quantity": 5,
                "orderDate": "2024-08-23",
                "status": "Delivered"
            }
        ]
    }
]
//ADDPRODUCTS
function addProduct(product){ 
    DatosJson[0]["products"].push(product)
}
//VIEWPRODUCTS
function viewProducts(){
    for (const i of DatosJson[0]["products"]){
        console.log("Id :",i["id"]);
        console.log("Name :",i["name"]);
        console.log("Category :",i["category"]);
        console.log("Price :",i["price"]);
        console.log("Quantity In Stock :",i["quantityInStock"]);
        console.log("Supplier Id:",i["supplierId"]);
    }
}
var opcion= prompt(
    "------------------------\n"+
    "---Inventory System---\n"+
    "------------------------\n1. Product Management\n2."
)
if (opcion==1){
    var opcionMana= prompt(
        "------------------------------\n"+"---Product Management---\n"+"------------------------------\n1.Creat new product\n2.Read all products\n3.Update product\n4.Delete product"
    )
    
    if (opcionMana==1){
        console.log(
            "-----------------------------\n"+
            "---Creat new product---\n"+
            "-----------------------------"
        );
        var newid= Number(prompt("Id: "));
        var newName= prompt("Name: ");
        var newCategory= prompt("Category: ");
        var newprice= prompt("Price: ");
        var newStock= prompt("Quantity In Stock: ");
        var newSupplierId= prompt("Supplier Id");

        

        addProduct(
            product ={
                "id": newid,
                "name": newName,
                "category": newCategory,
                "price": newprice,
                "quantityInStock": newStock,
                "supplierId": newSupplierId
            }
        )
        console.log(DatosJson);
    }
    if (opcionMana==2){
        console.log(
            "-----------------------------\n"+
            "---Read all products---\n"+
            "-----------------------------"
        );


        viewProducts()
    }
}

