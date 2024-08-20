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

//sin parametrso y sin retorno
function saludo(){
    console.log("Hola");
    
}
saludo();

//parametros con retorno
function suma(num1 , num2){
    return num1 + num2;
}
console.log(suma(15, 20));

//parametros sin retorno
function multi(a,b){
    console.log(a*b);
    
}
multi(13, 8)


//sin parametros con retorno

function resta(){
    let a= 10
    let b= 5
    return (a-b)
}
console.log(resta());
