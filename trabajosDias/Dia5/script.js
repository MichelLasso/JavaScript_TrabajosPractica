var DatosJson = [
    {
        "products": [
            {
                "id": 1,
                "name": "Laptop",
                "category": "Electronics",
                "price": 999.99,
                "quantityInStock": 50,
                "supplierId": 130
            },
            {
                "id": 2,
                "name": "pc",
                "category": "Electronics",
                "price": 999.99,
                "quantityInStock": 10,
                "supplierId": 304
            },
            {
                "id": 304,
                "name": "cel",
                "category": "Electronics",
                "price": 999.99,
                "quantityInStock": 30,
                "supplierId": 203
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
            },
            {
                "id": 203,
                "name": "Tech Supplies Inc.",
                "contactInfo": [
                    {
                        "phone": "123-456-7890",
                        "email": "sales@techsupplies.com",
                        "address": "123 Tech Lane, Silicon Valley, CA"
                    }
                ]
            },
            {
                "id": 304,
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
            },
            {
                "orderId": 300,
                "productId": 304,
                "quantity": 5,
                "orderDate": "2024-08-30",
                "status": "Delivered"
            },
            {
                "orderId": 500,
                "productId": 2,
                "quantity": 5,
                "orderDate": "2024-08-05",
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
function addOrder(order){
    DatosJson[0]["orders"].push[order]
}
//VIEWPRODUCTS
var cont=1
function viewProducts(){
    for (const i of DatosJson[0]["products"]){
        console.log("------Data: ",cont,"------");
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
// Stock Management
function checkStockLevels(){
    for (let i of DatosJson[0]["products"])
        if(i["quantityInStock"]<10){
            viewProducts()
        }
        else{
            console.log("there are no products with that sales quantity :)");
            
        }
}
function restockProduct(id, quantity){
    for(let i  of DatosJson[0]["products"]){
        if (i["id"]==id){
            i["quantityInStock"] += quantity
            console.log(DatosJson[0]["products"]);
            
        } 
    }
}
//filter products
function searchProducts(query){
    for (let i of DatosJson[0]["products"]){
        if(query==i["name"]){
            viewProducts()
        }
        else{
            console.log("product not found");
        }
    }
    for (let i of DatosJson[0]["products"]){
        if(query==i["category"]){
            viewProducts()
        }
    }
    for (let i of DatosJson[0]["products"]){
        if(query==i["supplierId"]){
            viewProducts()
        }
    }
}
//filter order
function filterOrders(criteria){
    for (let i of DatosJson[0]["orders"]){
        if(criteria==i["status"]){
            viewOrders()
        }
        else{
            console.log("Order not found");
            
        }
    }

    for (let i of DatosJson[0]["orders"]){
        if(criteria==i["orderDate"]){
            viewOrders()
        }
    }

    for (let i of DatosJson[0]["orders"]){
        if(criteria==i["productId"]){
            viewOrders()
        }
    }
}
//validation
function productId(){
    for (let i of DatosJson[0]["products"]){
        if(ValidationIDproduct==i["id"]){
            console.log("Correct ID");
        }
        else{
            console.log("product id not found :(");
        }
    }
}
function supplierId(){
    for (let i of DatosJson[0]["suppliers"]){
        if(validationSupplierId==i["id"]){
            console.log("Correct ID");
        }
        else{
            console.log("Suppliers id not found :(");
            
        }
    }
}
//date
function generateSalesReport(startDate, endDate){
    let filterNew= DatosJson[0]["orders"].filter(i=>i["orderDate"]>=startDate && i["orderDate"]<=endDate)
    let cont=1
    
    for (let i=1; i<filterNew.length;i++){
        cont++
    }
    console.log("the total number of orders in the date range entered is: ",cont);  
    let totalRevenue = 0;

    for (let order of filterNew) {
        const productId = order["productId"];
        const quantitySold = order["quantity"];
        const product = DatosJson[0]["products"].find(p => p["id"] === productId);

        
        if (product) {
            const productRevenue = product["price"] * quantitySold;
            totalRevenue += productRevenue;
            var nameProduct= product["name"]
            var stockProduct= product["quantityInStock"]
            var priceUn= product["price"]
            console.log("-----------------");
            
            console.log("Name :", nameProduct);
            console.log("quantity In Stock :", stockProduct);
            console.log("Price :", priceUn);
        }  
    }

    console.log("Total revenue from product sales: $", totalRevenue);
}



var opcion= prompt(
    "------------------------\n"+
    "---Inventory System---\n"+
    "------------------------\n1. Product Management\n2. Supplier Management\n3. Order Management\n4. Stock Management\n5. Reporting\n6. Search and Filter\n7. Data Integrity and Validation"
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

        
        addSupplier(
            supplier={
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
        ) 
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
if (opcion==3){
    var opcionOrder= prompt(
        "------------------------------\n"+"---Product Management---\n"+"------------------------------\n1.Creat new order\n2.Read all order\n3.Update order\n4.Delete order"
    )
    if (opcionOrder==1){
        console.log(
            "-----------------------------\n"+
            "---Creat new orders---\n"+
            "-----------------------------"
        );
        var orderid= Number(prompt("order Id: "));
        var producid= prompt("produc id: ");
        var quantityOrder= prompt("quantity: ");
        var orderDate= prompt("order Date: ");
        var statusOrder= prompt("status: ");
    
        addOrder(
            order={
                "orderId": orderid,
                "productId": producid,
                "quantity": quantityOrder,
                "orderDate": orderDate,
                "status": statusOrder,
            }
        )
        console.log(DatosJson);
    }
}
if (opcion==4){
    var StockOpcion= prompt(
        "------------------------------\n"+"---Stock Management---\n"+"------------------------------\n1. products with low sales\n2. increments the stock level of a product."
    )
    
    if (StockOpcion==1){
        console.log(
            "-----------------------------\n"+
            "---products with low sales---\n"+
            "-----------------------------"
        );
        checkStockLevels()
    }
    if (StockOpcion==2){
        console.log(
            "----------------------------------------------\n"+
            "---increments the stock level of a product.---\n"+
            "----------------------------------------------"
        );
        var id= Number(prompt("enter  the products id: "))
        var quantity=Number(prompt(
            "enter the quantity you want to increment :"
        ))
        restockProduct(id,quantity)
    }
}

function generateInventoryReport(){
    for(let i = 0 ; i < DatosJson[0].products.length; i++){
        console.log("Name: ",DatosJson[0]["products"][0]["name"]);
        console.log("Stock: ", DatosJson[0]["products"][0]["quantityInStock"]);
        
        let valor= DatosJson[0]["products"][0]["quantityInStock"] * DatosJson[0]["products"][0]["price"]
        console.log("The stock value is: ",valor);
    
        for (let i = 0 ; i < DatosJson[0].suppliers.length; i++){
            console.log(`id : ${DatosJson[0].suppliers[i].id}`);
            console.log(`name : ${DatosJson[0].suppliers[i].name}`);
            console.log(`phone : ${DatosJson[0].suppliers[i].contactInfo.phone}`);
            console.log(`email : ${DatosJson[0].suppliers[i].contactInfo.email}`);
            console.log(`adress : ${DatosJson[0].suppliers[i].contactInfo.address}`);
    
        }
    }
}

if(opcion==5){
    console.clear()
    console.log(
        "-----------------------------\n"+
        "---Reporting---\n"+
        "-----------------------------"
    );
    var opcionReporte=prompt("1. report by date\n2. report all products")
   
    if (opcionReporte==1){
        console.log(
            "-----------------------------\n"+
            "---report by date---\n"+
            "-----------------------------"
        );
        var startDate= prompt("Enter start date: ")
        var endDate= prompt("enter the End date: ")
        generateSalesReport(startDate,endDate)
        
    }
    if (opcionReporte==2){
        console.log(
            "-----------------------------\n"+
            "---report all products---\n"+
            "-----------------------------"
        );
        generateInventoryReport()
    }
}
if(opcion==6){
    console.log(                                                                                                                                                                                                                                                                                                                        
        "-----------------------------\n"+
        "---Search and Filter---\n"+
        "-----------------------------"
    );
    var opcionSearch= prompt(
        "1. search for product\n"+
        "2. search for Order"
    )
    if (opcionSearch==1){
        console.log(
            "-----------------------------\n"+
            "---search for product---\n"+
            "-----------------------------"
        );
        var enterUserSP= prompt(
            "1. name\n"+"2. category\n"+"3. supplier"
        )
        if (enterUserSP==1){
            console.log(
                "-----------------------\n"+
                "---name---\n"+
                "------------------------"
            );
            var enterName= prompt(
                "Enter the name: "
            )
            searchProducts(enterName)
        }
        if(enterUserSP==2){
            console.log(
                "-----------------------\n"+
                "---category---\n"+
                "------------------------"
            );
            var enterCategory= prompt("Enter the category: ")

            searchProducts(enterCategory)
        }
        if (enterUserSP==3){
            console.log(
                "-----------------------\n"+
                "---supplier---\n"+
                "------------------------"
            );
            var enterSupplier= Number(prompt("Enter the supplier id: "))

            searchProducts(enterSupplier)
        }
    }
    if (opcionSearch==2){
        console.clear
        console.log(
            "-----------------------------\n"+
            "---search for product---\n"+
            "-----------------------------"
        );
        var enterUserSo= prompt(
            "1. status\n"+"2. date range \n"+"3. product"
        )
        if (enterUserSo==1){
            console.clear()
            console.log(
                "-----------------------\n"+
                "---status---\n"+
                "------------------------"
            );
            var enterstatus= prompt("Enter the status: ")

            filterOrders(enterstatus)
            
        }
        if (enterUserSo==2){
            console.clear()
            console.log(
                "-----------------------\n"+
                "---date range---\n"+
                "------------------------"
            );
            var EnterDateRange= Number(prompt("Enter the date range: "))

            filterOrders(EnterDateRange)
            
        }
        if (enterUserSo==3){
            console.clear()
            console.log(
                "-----------------------\n"+
                "---product---\n"+
                "------------------------"
            );
            var enterProduct= Number(prompt("Enter the product id: "))

            filterOrders(enterProduct)
            
        }
    }
}
if(opcion==7){
    console.log(
        "-----------------------------------\n"+
        "---Data Integrity and Validation---\n"+
        "-----------------------------------"
    );
    var ValidationOpcion= prompt(
        "1. Product ID\n2. Supplier ID"
    )
    if (ValidationOpcion==1){
        console.clear()
        console.log(
            "-----------------------\n"+
            "---product id---\n"+
            "------------------------"
        );
        var ValidationIDproduct= prompt("Enter the Product ID: ")
        productId()
    }
    if (ValidationOpcion==2){
        console.clear()
        console.log(
            "-----------------------\n"+
            "---Supplier ID---\n"+
            "------------------------"
        );
        var validationSupplierId= prompt("Enter the Supplier ID: ")
        supplierId(validationSupplierId)
    }
}