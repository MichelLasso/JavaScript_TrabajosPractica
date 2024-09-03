document.getElementById("enter").addEventListener("input", (realizar)=>{
    let idEnter= document.getElementById("enter").value;

    let api= "https://pokeapi.co/api/v2/pokemon/"

    function pokeApi() {
        fetch(api+idEnter)
        .then(res => res.json())
        .then(mostrarDatos=>{

            let nameId= documen.getElementById("name");
            nameId.innerHTML += `
                ${mostrarDatos.id} - <span>${mostrarDatos.forms[0].name}</span>
            `;

            let mostrarGif= document.getElementById("poke");
            mostrarGif.innerHTML += `
                <audio autoplay src="${mostrarDatos.cries.latest}"></audio>
                <img src="${mostrarDatos.sprites.other.shawdown.front_default}">
            `;

            document.getElementById("uno").addEventListener("click", (anterior)=>{
                var anteriorId= mostrarDatos.id-1;
                obtenerId= String(anteriorId);
                pokeApi()

            })

            document.getElementById("dos").addEventListener("click", (siguiente=>{
                console.log(mostrarDatos);

                var siguienteId = mostrarDatos.id +1;
                obtenerId = String(siguienteId);
                pokeApi()
                
            }))
        })
    }
})
