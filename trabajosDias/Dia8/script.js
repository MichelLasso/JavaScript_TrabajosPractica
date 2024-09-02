fetch("https://swapi.py4e.com/api/people/1/")
.then( res => res.json())
.then(data=>{
    funcionEnter(data)

    let filmes= data.films;
    filmes.forEach(peli=>{
        fetch(peli)
        .then(res=> res.json())
        .then(newPeli =>{
            
                let PrimerCont= document.getElementById("cont1");
                
                PrimerCont.innerHTML += `
                    <tr>
                                <td class="table-dark">Films:</td>
                                <td class="table-dark">
                                    <div class="card text-bg-light mb-3" style="max-width: 50vw;">
                                        <div class="card-body">
                                            <table class="table">
                                                <thead class="table-light">Name:</thead>
                                                <tbody>
                                                    ${newPeli.title}
                                                </tbody>
                                            </table>
            
                                            <table class="table">
                                                <thead class="table-light">Episode id:</thead>
                                                <tbody>
                                                ${newPeli.episode_id}
                                                </tbody>
                                            </table>
            
                                            <table class="table">
                                                <thead class="table-light">Opening crawl:</thead>
                                                <tbody>
                                                ${newPeli.opening_crawl}
                                                </tbody>
                                            </table>
            
                                            <table class="table">
                                                <thead class="table-light">Director:</thead>
                                                <tbody>
                                                ${newPeli.director}
                                                </tbody>
                                            </table>
            
                                            <table class="table">
                                                <thead class="table-light">Producer:</thead>
                                                <tbody>
                                                ${newPeli.producer}
                                                </tbody>
                                            </table>
            
                                            <table class="table">
                                                <thead class="table-light">Release date:</thead>
                                                <tbody>
                                                ${newPeli.release_date}
                                                </tbody>
                                            </table>
            
                                            <table class="table">
                                                <thead class="table-light">Created:</thead>
                                                <tbody>
                                                ${newPeli.created}
                                                </tbody>
                                            </table>
            
                                            <table class="table">
                                                <thead class="table-light">Edited:</thead>
                                                <tbody>
                                                ${newPeli.edited}
                                                </tbody>
                                            </table>
            
                                            <table class="table">
                                                <thead class="table-light">Url:</thead>
                                                <tbody>
                                                ${newPeli.url}
                                                </tbody>
                                            </table>
            
                                        </div>
                                    </div>
                                    <td class="table-dark"></td>
                                </td>
                                
                            </tr>
                `
            
        })
    })
})

fetch("https://swapi.py4e.com/api/planets/1/")
.then( resp => resp.json())
.then(data2=>{
    planets(data2)
})



fetch("https://swapi.py4e.com/api/species/1/")
.then(res=> res.json())
.then( data4=>{
    species(data4)
})

fetch("https://swapi.py4e.com/api/vehicles/14/")
.then(res => res.json())
.then(data5=>{
    vehicles(data5)
})

fetch("https://swapi.py4e.com/api/starships/12/")
.then(resp=> resp.json())
.then(data6=> {
    starship(data6)
})

function funcionEnter(data) {
    let PrimerCont= document.getElementById("cont1");

    PrimerCont.innerHTML += `
        <tbody class="table-group-divider">
                <tr>
                    <td class="table-dark">Name</td>
                    <td class="table-dark">${data.name}</td>
                    <td class="table-dark"></td>
                </tr>
                <tr>
                    <td class="table-dark">Height</td>
                    <td class="table-dark">${data.height}</td>
                    <td class="table-dark"></td>
                </tr>
                <tr>
                    <td class="table-dark">Mass</td>
                    <td class="table-dark">${data.mass}</td>
                    <td class="table-dark"></td>
                </tr>
                <tr>
                    <td class="table-dark">Hair color</td>
                    <td class="table-dark">${data.hair_color}</td>
                    <td class="table-dark"></td>
                </tr>
                <tr>
                    <td class="table-dark">Eye color</td>
                    <td class="table-dark">${data.skin_color}</td>
                    <td class="table-dark"></td>
                </tr>
                <tr>
                    <td class="table-dark">Skin color</td>
                    <td class="table-dark">${data.eye_color}</td>
                    <td class="table-dark"></td>
                </tr>
                <tr>
                    <td class="table-dark">Birth year</td>
                    <td class="table-dark">${data.birth_year}</td>
                    <td class="table-dark"></td>
                </tr>
                <tr>
                    <td class="table-dark">Gender</td>
                    <td class="table-dark">${data.gender}</td>
                    <td class="table-dark"></td>
                </tr>
                `
}
function planets(data2) {
    let PrimerCont = document.getElementById("cont1");
    PrimerCont.innerHTML +=`
        <tr>
                    <td class="table-dark">Homeworld:</td>
                    <td class="table-dark">
                        <div class="card text-bg-light mb-3" style="max-width: 50vw;">
                            <div class="card-body">
                                <table class="table">
                                    <thead class="table-light">Name:</thead>
                                    <tbody>
                                        ${data2.name}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Rotation period:</thead>
                                    <tbody>
                                        ${data2.orbital_period}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Orbital period:</thead>
                                    <tbody>
                                        ${data2.orbital_period}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Diameter:</thead>
                                    <tbody>
                                        ${data2.diameter}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Climate:</thead>
                                    <tbody>
                                        ${data2.climate}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Gravity:</thead>
                                    <tbody>
                                        ${data2.gravity}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Terrain:</thead>
                                    <tbody>
                                        ${data2.terrain}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Surface water:</thead>
                                    <tbody>
                                        ${data2.surface_water}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Population:</thead>
                                    <tbody>
                                        ${data2.population}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Created:</thead>
                                    <tbody>
                                        ${data2.created}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Edited:</thead>
                                    <tbody>
                                        ${data2.edited}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Url:</thead>
                                    <tbody>
                                        ${data2.url}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <td class="table-dark"></td>
                    </td>
                    
                </tr>
    `
}



function species(data4) {
    let PrimerCont= document.getElementById("cont1");
    PrimerCont.innerHTML += `
        
                <tr>
                    <td class="table-dark">Species:</td>
                    <td class="table-dark">
                        <div class="card text-bg-light mb-3" style="max-width: 50vw;">
                            <div class="card-body">
                                <table class="table">
                                    <thead class="table-light">Name:</thead>
                                    <tbody>
                                        ${data4.name}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Classification:</thead>
                                    <tbody>
                                        ${data4.classification}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Designation:</thead>
                                    <tbody>
                                        ${data4.designation}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Average height:</thead>
                                    <tbody>
                                        ${data4.average_height}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Skin colors:</thead>
                                    <tbody>
                                        ${data4.skin_colors}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Hair colors:</thead>
                                    <tbody>
                                        ${data4.hair_colors}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Eye colors:</thead>
                                    <tbody>
                                        ${data4.eye_colors}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Average lifespan:</thead>
                                    <tbody>
                                        ${data4.average_lifespan}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Language:</thead>
                                    <tbody>
                                        ${data4.language}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Created:</thead>
                                    <tbody>
                                        ${data4.created}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Edited:</thead>
                                    <tbody>
                                        ${data4.edited}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Url</thead>
                                    <tbody>
                                        ${data4.url}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <td class="table-dark"></td>
                    </td>
                    
                </tr>
    `
}

function vehicles(data5) {
    let PrimerCont= document.getElementById("cont1")
    PrimerCont.innerHTML += `
        <tr>
                    <td class="table-dark">Vehicles:</td>
                    <td class="table-dark">
                        <div class="card text-bg-light mb-3" style="max-width: 50vw;">
                            <div class="card-body">
                                <table class="table">
                                    <thead class="table-light">Name:</thead>
                                    <tbody>
                                        ${data5.name}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Model:</thead>
                                    <tbody>
                                        ${data5.model}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Manufacturer:</thead>
                                    <tbody>
                                        ${data5.manufacturer}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Cost in credits:</thead>
                                    <tbody>
                                        ${data5.cost_in_credits}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Length:</thead>
                                    <tbody>
                                        ${data5.length}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Max atmosphering speed:</thead>
                                    <tbody>
                                        ${data5.max_atmosphering_speed}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Crew:</thead>
                                    <tbody>
                                        ${data5.crew}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Passengers:</thead>
                                    <tbody>
                                        ${data5.passengers}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Cargo capacity:</thead>
                                    <tbody>
                                        ${data5.cargo_capacity}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Consumables:</thead>
                                    <tbody>
                                        ${data5.consumables}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Vehicle class:</thead>
                                    <tbody>
                                        ${data5.vehicle_class}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Created:</thead>
                                    <tbody>
                                        ${data5.created}
                                    </tbody>
                                </table>


                                <table class="table">
                                    <thead class="table-light">Edited:</thead>
                                    <tbody>
                                        ${data5.edited}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Url</thead>
                                    <tbody>
                                        ${data5.url}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <td class="table-dark"></td>
                    </td>
                    
                </tr>
    `
}

function starship(data6) {
    let PrimerCont= document.getElementById("cont1")
    PrimerCont.innerHTML += `
        <tr>
                    <td class="table-dark">Starships:</td>
                    <td class="table-dark">
                        <div class="card text-bg-light mb-3" style="max-width: 50vw;">
                            <div class="card-body">
                                <table class="table">
                                    <thead class="table-light">Name:</thead>
                                    <tbody>
                                        ${data6.name}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Model:</thead>
                                    <tbody>
                                        ${data6.model}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Manufacturer:</thead>
                                    <tbody>
                                        ${data6.manufacturer}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Cost in credits:</thead>
                                    <tbody>
                                        ${data6.name}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Length:</thead>
                                    <tbody>
                                        ${data6.length}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Max atmosphering speed:</thead>
                                    <tbody>
                                        ${data6.max_atmosphering_speed}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Crew:</thead>
                                    <tbody>
                                        ${data6.crew}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Passengers:</thead>
                                    <tbody>
                                        ${data6.passengers}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Cargo capacity:</thead>
                                    <tbody>
                                        ${data6.cargo_capacity}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Consumables:</thead>
                                    <tbody>
                                        ${data6.consumables}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Hyperdrive rating:</thead>
                                    <tbody>
                                        ${data6.hyperdrive_rating}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">MGLT:</thead>
                                    <tbody>
                                        ${data6["MGLT"]}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Starship class:</thead>
                                    <tbody>
                                        ${data6.starship_class}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Created:</thead>
                                    <tbody>
                                        ${data6.created}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Edited:</thead>
                                    <tbody>
                                        ${data6.edited}
                                    </tbody>
                                </table>

                                <table class="table">
                                    <thead class="table-light">Url</thead>
                                    <tbody>
                                        ${data6.url}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <td class="table-dark"></td>
                    </td>
                    
                </tr>
    
            </tbody>
    `
}
