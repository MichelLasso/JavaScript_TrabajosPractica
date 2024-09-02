var input= document.getElementById("enter").value;
var submit= document.getElementById("uno");


fetch("https://pokeapi.co/api/v2/pokemon/1")
.then(res=>  res.json())
.then(data=>{
    console.log(data);
    mostrar(data)
})

function mostrar(data) {
    var imagen= document.getElementById("poke");
    imagen.innerHTML += `
        <img src="${data}">
    `
}