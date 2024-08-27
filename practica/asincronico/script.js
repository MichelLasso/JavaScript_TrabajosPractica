function mensaje(){
    console.log("hi");
    
}
//HTTP cats
/*var xmhttp= new XMLHttpRequest();
xmhttp.open(`GET`,url)
var url= "texto.txt";
xmhttp.onreadystatechange= function(){
    if(this.readyState==4 && this.status==200){
        var myArr= JSON.parse(this.respons)
    }
}*/
//llamamos al id del html, para realizar la función desp de presionar el botón
document.getElementById("button1").addEventListener("click", obtenerTexto);
//document es el html y indica que busque el id del button1 ->document.getElementById("button1")
//y revisa los eventos que la persona haga en este caso el click ->.addEventListener("click"
//se ejecuta la función de obtenertexto al hacer el click ->("click", obtenerTexto);

function obtenerTexto(){
    fetch("texto.txt") //obtener el texto
    .then(res => res.text())
    .then(data =>{
        console.log(data);
        document.getElementById("output").innerHTML=data;
    })
    .catch(err=>{
        console.log("Hubo un error");
        document.getElementById("output").innerHTML=err;
    })
    //tmb se puede hacer asi catch (error) {console.error("Error:", error);
}

document.getElementById("button2").addEventListener("click", obtenerJSON)

function obtenerJSON(){
    fetch("elJson.json")
    .then(res=> res.json())
    .then(data =>{
        for (i in data){
            document.getElementById("output").innerHTML +=`
            <h1 id="hi">Nombre:  ${data[i]["nombre"]} </h1>
            <h1>Cargo: ${data[i]["edad"]} </h1>
            `
        }
    })
}