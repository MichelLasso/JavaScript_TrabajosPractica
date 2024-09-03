document.getElementById("enter").addEventListener(`input`, newApi)


function newApi() {
    let idEnter= document.getElementById("enter").value;
    idNew= idEnter
    let api= "https://pokeapi.co/api/v2/pokemon/"+idEnter
    mostrar(api)
}
function mostrar(api) {
    fetch(api)
    .then(res => res.json())
    .then(pokeApi=>{
        console.log(pokeApi);
        document.getElementById("poke").innerHTML =""
        document.getElementById("poke").innerHTML += `
            <img src="${pokeApi.sprites.other.showdown.front_default}">
            <audio autoplay src="${pokeApi.cries.latest}"></audio>
        `
        document.getElementById("name").innerHTML = ""
        document.getElementById("name").innerHTML += `
            <div id="text1">${pokeApi.id} ${pokeApi.forms[0].name}</div>
        `
    })
}
document.getElementById("uno").addEventListener("click",()=>{
    idNew--;
    let api= "https://pokeapi.co/api/v2/pokemon/"+idNew
    mostrar(api)
})

document.getElementById("dos").addEventListener("click",()=>{
    idNew++;
    let api= "https://pokeapi.co/api/v2/pokemon/"+idNew
    mostrar(api)
})