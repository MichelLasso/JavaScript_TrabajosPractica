let nameImg = document.getElementById("imagen")
nameImg.addEventListener("click", mostrarName)


fetch("https://randomuser.me/api/")
.then(res => res.json())
.then(random=>{
    console.log(random);
    //let email= result[0]["email"]
    //let pass= result[0]["login"].password
    //let phone= result[0]["password"]
    let result= random.results
    document.getElementById("Contfoto").innerHTML =""
    document.getElementById("Contfoto").innerHTML =`
        <img src="${result[0]["picture"]["large"]}" alt="" id="img">
    `
})
function mostrarName(random) {
    let result= random.results
    let name= result[0]["name"].first
    let lastt=result[0]["name"].last
    
    document.getElementById("contdaticos").innerHTML +=""
    document.getElementById("contdaticos").innerHTML += `
        <div id="introName">Hi, My name is</div>
        <div id="name">${name} ${lastt}</div>
    `
}