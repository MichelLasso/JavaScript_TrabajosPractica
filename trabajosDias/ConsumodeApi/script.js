fetch("https://www.datos.gov.co/resource/yfdv-t4bc.json")
.then(res=> res.json())
.then(datos=>{
    console.log(datos);
    
})