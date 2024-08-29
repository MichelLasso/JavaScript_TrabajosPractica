fetch("https://superheroapi.com/api.php/7bc7a2b6ff06e2092f556c391e225e8a/70/image")
.then(res=> res.json())
.then(data =>{
    console.log(data);
})