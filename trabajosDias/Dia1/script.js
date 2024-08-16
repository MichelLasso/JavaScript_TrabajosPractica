//imprimir año de nacimiento
const año = 2024
function nacimiento(edad){
    console.log(año-edad);
}

nacimiento(17)

//Grados celsius a fahrenheit
var celsius=35
const convercion= function tem(){
    fahrenheit=32+(9*celsius/5)
    console.log(fahrenheit);
    
}

convercion()

//Descuento por llegada
let cliente = 20
const descuento=  function llegada(){

    if (cliente <=20){
        console.log("El cliente tiene 30% de descuento");
        
    }
    else if (cliente >20 & cliente <=50){
        console.log("El cliente tiene 10% de descuento");
        
    }

}

descuento()

function saludo(){
    console.log("Hola");
    
}
saludo();


function suma(num1 , num2){
    return num1 + num2;
}

console.log(suma(15, 20));


function multi(a,b){
    console.log(a*b);
    
}
multi(13, 8)
