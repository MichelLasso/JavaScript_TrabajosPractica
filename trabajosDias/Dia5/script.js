var DatosJson = [
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
                "contactInfo": [
                    {
                        "phone": "123-456-7890",
                        "email": "sales@techsupplies.com",
                        "address": "123 Tech Lane, Silicon Valley, CA"
                    }
                ]
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
function addSupplier(supplier){
    DatosJson[0]["suppliers"].push[supplier]
}
//VIEWPRODUCTS
var cont=1
function viewProducts(){
    for (const i of DatosJson[0]["products"]){
        console.log("Data: ",cont);
        console.log("Id :",i["id"]);
        console.log("Name :",i["name"]);
        console.log("Category :",i["category"]);
        console.log("Price :",i["price"]);
        console.log("Quantity In Stock :",i["quantityInStock"]);
        console.log("Supplier Id:",i["supplierId"]);
        cont=cont+1
    }
}
//viewSuppliers
function viewSuppliers(){
    for (const i of DatosJson[0]["suppliers"]){
        console.log("----Data: ",cont,"----");
        console.log("Id :",i["id"]);
        console.log("Name :",i["name"]);
        for(const x of DatosJson[0]["suppliers"][0]["contactInfo"]){
            console.log("phone :",x["phone"]);
            console.log("email :",x["email"]);
            console.log("address :",x["address"]);
        }
        
    }
}
//viewOrders
function viewOrders(){
    for (const i of DatosJson[0]["orders"]){
        console.log("Data: ",cont);
        console.log("Order ID :",i["orderId"]);
        console.log("Product ID :",i["productId"]);
        console.log("Quantity :",i["quantity"]);
        console.log("Order Date :",i["orderDate"]);
        console.log("Status :",i["status"]);
        cont=cont+1
    }
}
//Change
function updateProduct(id, newDetails){
    DatosJson[0]["products"][0][id]=newDetails;
}
function updateProduct(name, newDetails){
    DatosJson[0]["products"][0][name]=newDetails
}
function updateProduct(category, newDetails){
    DatosJson[0]["products"][0][category]=newDetails
}
function updateProduct(price, newDetails){
    DatosJson[0]["products"][0][price]=newDetails
}
function updateProduct(quantityInStock, newDetails){
    DatosJson[0]["products"][0][quantityInStock]=newDetails
}
function updateProduct(supplierId, newDetails){
    DatosJson[0]["products"][0][supplierId]=newDetails
}


function updateSupplier(id, newDetails){
    DatosJson[0]["suppliers"][0][id]=newDetails;
}
function updateSupplier(name, newDetails){
    DatosJson[0]["suppliers"][0][name]=newDetails
}
function updateSupplier(phone, newDetails){
    DatosJson[0]["suppliers"][0][phone]=newDetails
}
function updateSupplier(email, newDetails){
    DatosJson[0]["suppliers"][0][email]=newDetails
}
function updateSupplier(address, newDetails){
    DatosJson[0]["suppliers"][0][address]=newDetails
}
  
var opcion= prompt(
    "------------------------\n"+
    "---Inventory System---\n"+
    "------------------------\n1. Product Management\n2. Supplier Management"
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
        console.log(DatosJson[0]["products"]);
    }
    if (opcionMana==2){
        console.log(
            "-----------------------------\n"+
            "---Read all products---\n"+
            "-----------------------------"
        );

        viewProducts()
    }
    if( opcionMana==3){
        console.log(
            "-----------------------------\n"+
            "---Update products---\n"+
            "-----------------------------"
        );
        
        viewProducts()

        let opcionUp=prompt("Enter the number of the data you wish to change: ") 
        
        if (opcionUp==1){

            console.log("Change ID");
 
            let newID= Number(prompt("Enter the new ID: "))
            
            updateProduct("id", newID)
            console.log(DatosJson);
        }
        if (opcionUp==2){
            console.log("Change Name ");
            
            let NewName= prompt("Enter the new name: ")
            updateProduct("name", NewName)
            console.log(DatosJson);
        }
        if (opcionUp==3){

            console.log("Change category");
            
            let Newcategory= prompt("Enter the new Category: ")

            updateProduct("category", Newcategory)
            console.log(DatosJson);
        }

        if (opcionUp==4){

            console.log("Change Price");
            
            let Newprice= Number(prompt("Enter the new price: "))

            updateProduct("price", Newprice)
            console.log(DatosJson);
        }

        if(opcionUp==5){
            console.log("Change quantity In Stock");
            
            let NewquantityInStock=Number(prompt("Change the new quantity In Stock: "))

            updateProduct("quantityInStock", NewquantityInStock)
            console.log(DatosJson);
        }

        if(opcionUp==6){
            console.log("Change supplier Id");
            
            let NewsupplierId=Number(prompt("Enter the new supplier Id: "))

            updateProduct("supplierId", NewsupplierId)
            console.log(DatosJson);
        }
        
    }

    if(opcionMana==4){
        console.log(
            "-----------------------------\n"+
            "---Delete product---\n"+
            "-----------------------------"
        );

        viewProducts()
        function deleteProduct(id){
            DatosJson[0]["products"]=DatosJson[0]["products"].filter(product => product.id !== id);            
        }
        
        let idDelete= Number(prompt("enter the number of the product you want to delete: "))
        deleteProduct(idDelete)
        console.log(DatosJson[0]["products"]);
        
    }
}
if(opcion==2){
    var opcionSupplier= prompt(
        "------------------------------\n"+"---Supplier Management---\n"+"------------------------------\n1.Creat new Supplier\n2.Read all supplier data\n3.Update Supplier\n4.Delete Supplier"
    )
    if (opcionSupplier==1){
        console.log(
            "-----------------------------\n"+
            "---Creat new supplier---\n"+
            "-----------------------------"
        );
        var newid= Number(prompt("Id: "));
        var newName= prompt("Name: ");
        var newphone= prompt("phone: ");
        var newemail= prompt("Email: ");
        var newaddress= prompt("Address: ");

        
        let supplier ={
            "id": newid,
            "name": newName,
            "contactInfo": [
                {
                    "phone": newphone,
                    "email": newemail,
                    "address": newaddress
                }
    
            ]
            }
        addSupplier(supplier)
        console.log(DatosJson[0]["suppliers"]);
    }
    if (opcionSupplier==2){
        console.log(
            "-----------------------------\n"+
            "---Read all supplier data---\n"+
            "-----------------------------"
        );

        console.log(viewSuppliers());
        
    }
    if( opcionSupplier==3){
        console.log(
            "-----------------------------\n"+
            "---Update Supplier---\n"+
            "-----------------------------"
        );
        
        viewSuppliers()

        let opcionUS=prompt("Enter the number of the data you wish to change: ") 
        
        if (opcionUS==1){

            console.log("Change ID");
 
            let newID= Number(prompt("Enter the new ID: "))
            
            updateSupplier("id", newID)
            console.log(DatosJson[0]["suppliers"]);
        }
        if (opcionUS==2){
            console.log("Change Name ");
            
            let NewName= prompt("Enter the new name: ")
            updateSupplier("name", NewName)
            console.log(DatosJson[0]["suppliers"]);
        }
        if (opcionUS==3){

            console.log("Change phone");
            
            let Newphone= prompt("Enter the new Category: ")

            updateSupplier("phone", Newphone)
            console.log(DatosJson[0]["suppliers"]);
        }

        if (opcionUS==4){

            console.log("Change email");
            
            let Newemail= prompt("Enter the new email: ")

            updateSupplier("email", Newemail)
            console.log(DatosJson[0]["suppliers"]);
        }

        if(opcionUS==5){
            console.log("Change address");
            
            let Newaddress=prompt("Change the new address: ")

            updateSupplier("address", Newaddress)
            console.log(DatosJson[0]["suppliers"]);
        }
    }

    if(opcionSupplier==4){
        console.log(
            "-----------------------------\n"+
            "---Delete supplier---\n"+
            "-----------------------------"
        );

        viewSuppliers()
        function deletesupplier(id){
            DatosJson[0]["suppliers"]=DatosJson[0]["suppliers"].filter(supplier => supplier.id !== id);        }
        
        let idDelete= Number(prompt("enter the number of the supplier you want to delete: "))
        deletesupplier(idDelete)
        console.log(DatosJson);
        
    }
}

