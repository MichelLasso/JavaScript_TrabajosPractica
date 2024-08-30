
let url =""
let Datos=[]
for(let i =0; i < 732; i++){
    url=`https://superheroapi.com/api.php/7bc7a2b6ff06e2092f556c391e225e8a/`+String(i);
    fetch(url)
    .then(res => res.json())
    .then(Data => {
        Datos.push(Data)
    })
}

const powerstatsContainer = document.getElementById("powerstats");
const biographyContainer = document.getElementById("biography");
const appearanceContainer = document.getElementById("appearance");
const workContainer = document.getElementById("work");
const connections = document.getElementById("connections");
const imageContainer = document.getElementById("image");

powerstatsContainer.innerHTML = ""; 


const enviarId= document.getElementById("enviarId")

enviarId.addEventListener("click", buscarId)

function buscarId() {
    const IdUsurio = document.getElementById("idUsuario").value;
    const busca = Datos.filter((item) => item.id === IdUsurio);

    if (busca.length === 0){
        const buscarName = Datos.filter((item) => item.name === IdUsurio);
        
        var powerstatsV= buscarName[0].powerstats;
        var biographyV= buscarName[0].biography;        
        var appearanceV= buscarName[0].appearance;        
        var heightV= appearanceV.height
        var weightV= appearanceV.weight
        var workV= buscarName[0].work;
        var connectionsV= buscarName[0].connections;
        var imageV= buscarName[0].image;
        console.log(imageV);
        
            powerstatsContainer.innerHTML += `
                    <div id="titulo1">PowerStats</div>
                    <div id="text1">intelligence: ${powerstatsV.intelligence}</div>
                    <div id="text1">strength: ${powerstatsV.strength}</div>
                    <div id="text1">speed: ${powerstatsV.speed}</div>
                    <div id="text1">durability: ${powerstatsV.durability}</div>
                    <div id="text1">power: ${powerstatsV.power}</div>
                    <div id="text1">combat: ${powerstatsV.combat}</div>
            `;
            biographyContainer.innerHTML += `
                <div id="titulo1">Biography</div>
                <div id="text1">full name : ${biographyV["full-name"]}</div>
                <div id="text1">alter egos : ${biographyV["alter-egos"]}</div>
                <div id="text1">aliases : ${biographyV["aliases"]}</div>
                <div id="text1">place of birth : ${biographyV["place-of-birth"]}</div>
                <div id="text1">first appearance : ${biographyV["first-appearance"]}</div>
                <div id="text1">publisher : ${biographyV["publisher"]}</div>
                <div id="text1">alignment : ${biographyV["alignment"]}</div>

            `
            appearanceContainer.innerHTML += `
                <div id="titulo1">Appearance</div>
                <div id="text1">gender: ${appearanceV["gender"]}</div>
                <div id="text1">race: ${appearanceV["race"]}</div>
                <div id="text1">height: ${heightV["height"]}</div>
                <div id="text1">weight: ${weightV["weight"]}</div>
                <div id="text1">eye color: ${appearanceV["eye-color"]}</div>
                <div id="text1">hair color: ${appearanceV["hair-color"]}</div>
            `
            workContainer.innerHTML +=`
                <div id="titulo1">Work</div>
                <div id="text1">occupation :${workV["occupation"]}</div>
                <div id="text1">base :${workV["base"]}</div>
            `
            connections.innerHTML +=`   
                <div id="titulo1">Connections</div>
                <div id="text3">group affiliation : ${connectionsV["group-affiliation"]}</div>
                <div id="text3">relatives :${connectionsV["relatives"]}</div>
            `
            imageContainer.innerHTML +=`
                <div id="titulo1">${buscarName.name}</div>
                <img src="${imageV["image"]}" alt="">
            `
    }
    else{

        var powerstatsV= busca[0].powerstats;
        var biographyV= busca[0].biography;        
        var appearanceV= busca[0].appearance;        
        var heightV= appearanceV.height
        var weightV= appearanceV.weight
        var workV= busca[0].work;
        var connectionsV= busca[0].connections;
        var imageV= busca[0].image;
        console.log(imageV);
        
            powerstatsContainer.innerHTML += `
                    <div id="titulo1">PowerStats</div>
                    <div id="text1">intelligence: ${powerstatsV.intelligence}</div>
                    <div id="text1">strength: ${powerstatsV.strength}</div>
                    <div id="text1">speed: ${powerstatsV.speed}</div>
                    <div id="text1">durability: ${powerstatsV.durability}</div>
                    <div id="text1">power: ${powerstatsV.power}</div>
                    <div id="text1">combat: ${powerstatsV.combat}</div>
            `;
            biographyContainer.innerHTML += `
                <div id="titulo1">Biography</div>
                <div id="titulo1">PowerStats</div>
                <div id="text1">full name : ${biographyV["full-name"]}</div>
                <div id="text1">alter egos : ${biographyV["alter-egos"]}</div>
                <div id="text1">aliases : ${biographyV["aliases"]}</div>
                <div id="text1">place of birth : ${biographyV["place-of-birth"]}</div>
                <div id="text1">first appearance : ${biographyV["first-appearance"]}</div>
                <div id="text1">publisher : ${biographyV["publisher"]}</div>
                <div id="text1">alignment : ${biographyV["alignment"]}</div>

            `
            appearanceContainer.innerHTML += `
                <div id="titulo1">Appearance</div>
                <div id="text1">gender: ${appearanceV["gender"]}</div>
                <div id="text1">race: ${appearanceV["race"]}</div>
                <div id="text1">height: ${heightV["height"]}</div>
                <div id="text1">weight: ${weightV["weight"]}</div>
                <div id="text1">eye color: ${appearanceV["eye-color"]}</div>
                <div id="text1">hair color: ${appearanceV["hair-color"]}</div>
            `
            workContainer.innerHTML +=`
                <div id="titulo1">Work</div>
                <div id="text1">occupation :${workV["occupation"]}</div>
                <div id="text1">base :${workV["base"]}</div>
            `
            connections.innerHTML +=`
                <div id="titulo1">Connections</div>
                <div id="text3">group affiliation : ${connectionsV["group-affiliation"]}</div>
                <div id="text3">relatives :${connectionsV["relatives"]}</div>
            `
            imageContainer.innerHTML +=`
                <div id="titulo1">${buscarName.name}</div>
                <img src="${imageV["image"]}" alt="">
            `
    }
}

