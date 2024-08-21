/*super digito*/
function superDigit(n,k){

    var n = prompt("Ingrese el número: ")
    var k = prompt("Ingrese la la cantidad de números que hay: ")

    if (n.length==1){
        console.log("\n----Super Digito----\n");
        return parseInt(n)
    }
    console.log("\n----Super Digito----\n");
    console.log("El número ingresado es : ",n); 

    var suma= 0
    var sumad=0
    var suma3=0
    var p = ""

    for(let pasos=0; pasos<k;pasos++){ //multiplicar el número n por cantidad de veces k
        p+=n
    }

    console.log("\nSe multiplicó la cantidad de veces que ingresaste: ",p);

    let conversion= p.split("")

    for(const i of conversion){
        suma+= Number(i)
    }
    console.log("\nLa suma de los dígitos es: ",suma);


    suma=String(suma)

    for(a of suma){
        sumad += Number(a)
    }
    console.log("\nEl super dígito es: ",sumad);

    return superDigit()
}
console.log(superDigit());

