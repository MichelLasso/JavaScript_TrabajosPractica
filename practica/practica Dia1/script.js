//Print
console.log("Hola mundo")
//data type number
num1=1
num2=3.14
//data type verification
console.log(typeof num1);
console.log(typeof num2);

//for operation
operation=((((5**6)+256)/5)*2);
console.log(operation);

//string
text1="Campus";
text2="lands";

// print
console.log(text1 + text2);

//booleanos

bool= true
bool2= false
bool3= true
bool4= true

operationbanders= (bool||bool2)& (bool3||bool4);
console.log(operationbanders);

// Crear una promesa que se cumple después de 2 segundos
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("¡Hola, mundo!"); // La promesa se cumple con un valor
    }, 2000);
});

// Manejar la promesa
promesa.then((valor) => {
    console.log(valor); // ¡Hola, mundo!
});
