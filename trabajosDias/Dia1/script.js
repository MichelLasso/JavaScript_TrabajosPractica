//imprimir año de nacimiento
const año = 2024
function nacimiento(edad){
    console.log(año-edad);
}

nacimiento(17)

//Grados celsius a fahrenheit
var celsius=35
const convercion= function tem(){
    f=32+(9*celsius/5)
    console.log(f);
    
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