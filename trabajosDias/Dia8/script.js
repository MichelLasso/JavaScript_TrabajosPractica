fetch("https://swapi.py4e.com/api/films/1/")
.then( res => res.json())
.then(data=>{
    console.log(data);
})

const click= document.getElementById("input-group-text")
click.addEventListener("click", funcionEnter)

function funcionEnter() {
    
    const IdInput = document.getElementById("inputGroupFile02").value;
    const busca = data.filter((item) => item.id === IdInput); 
    console.log(busca);


    
}