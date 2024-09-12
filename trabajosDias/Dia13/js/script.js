let entradaCont= document.getElementById("entrada")
let empezar = document.getElementById("empezar")
empezar.addEventListener("click", dato1);


var PartidasGanadas= 0
var PartidasPerdidas= 0


function dato1() {
    entradaCont.style ="display: none"
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json())
    .then(data =>{
        //console.log(data);
        idCarta= data.deck_id
        console.log(idCarta);
        fetch(`https://deckofcardsapi.com/api/deck/${idCarta}/draw/?count=7`)
        .then(res => res.json())
        .then(cartas=>{
            console.log(cartas);
            valor= cartas.cards[0].value
            
            //console.log(valor); 
            //console.log(valor2);
            logo= cartas.cards[0].suit
            //console.log(logo);
            //console.log(logo2);
            //console.log(imagen);
            const ordenRandom = cartas.cards.slice().sort(() => Math.random() - 0.5);
            console.log(ordenRandom);

            const randomIndex = Math.floor(Math.random() * ordenRandom.length);
            const randomCard = ordenRandom[randomIndex];
            console.log(randomCard);
            var idRandomCard= randomCard.code
            console.log(idRandomCard);

            function RespuestaCorrecta() {
                
                document.getElementById("carta2").innerHTML = `
                    <button id="mostrar">Mostrar Carta</button>
                    <img src="${randomCard.image}">
                `
            }
            
            document.getElementById("carta").innerHTML = `
                
                <div class="imgAdivina"></div>
                    <div class="cartAdivinarText">¿?</div>
                    <div class="cartAdivinarTextBig"><h1 class="DosColores"><span>¿</span>?</h1></div>
                    <div class="cartAdivinarText2">¿?</div>
                </div>
                

            `
            document.getElementById("carta2").innerHTML = `
                
                <img src="${cartas.cards[0].image}" class="img" id="cartaElegida">
                <img src="${cartas.cards[1].image}" class="img" id="cartaElegida2">
                <img src="${cartas.cards[2].image}" class="img" id="cartaElegida3">
                <img src="${cartas.cards[3].image}" class="img" id="cartaElegida4">
                <img src="${cartas.cards[4].image}" class="img" id="cartaElegida5">
                <img src="${cartas.cards[5].image}" class="img" id="cartaElegida6">
                <img src="${cartas.cards[6].image}" class="img" id="cartaElegida7">
                <div class="tablaPuntaje">
                    <div class="partidasGanadas">Partidas Ganadas: ${PartidasGanadas}</div>
                    <div class="partidasPerdidas">Partidas Perdidas: ${PartidasPerdidas}</div>
                </div>
            `
            console.log(cartas.cards);
            
            const imagen1= document.getElementById("cartaElegida");
            imagen1.addEventListener("click", detectarId);

            const imagen2= document.getElementById("cartaElegida2");
            imagen2.addEventListener("click", detectarId2);

            const imagen3= document.getElementById("cartaElegida3");
            imagen3.addEventListener("click", detectarId3);

            const imagen4= document.getElementById("cartaElegida4");
            imagen4.addEventListener("click", detectarId4);

            const imagen5= document.getElementById("cartaElegida5");
            imagen5.addEventListener("click", detectarId5);

            const imagen6= document.getElementById("cartaElegida6");
            imagen6.addEventListener("click", detectarId6);

            const imagen7= document.getElementById("cartaElegida7");
            imagen7.addEventListener("click", detectarId7);

            function detectarId(){
                const idCartaUsuario= cartas.cards[0].code
                console.log(idCartaUsuario);
                if(idCartaUsuario===idRandomCard){
                    
                    alert("woaAA")

                    PartidasGanadas = PartidasGanadas+1

                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    
                    dato1()

                }
                else{
                    alert("nadaaaaaa:(")
                    PartidasPerdidas= PartidasPerdidas+1

                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img">
                    `
                    dato1()
                }
            }
            function detectarId2(){
                const idCartaUsuario= cartas.cards[1].code
                console.log(idCartaUsuario);
                if(idCartaUsuario===idRandomCard){
                    alert("woaAA")
                    PartidasGanadas = PartidasGanadas+1
                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    dato1()
                }
                else{
                    alert("nadaaaaaa:(")
                    PartidasPerdidas= PartidasPerdidas+1
                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    dato1()
                }
            }
            function detectarId3(){
                const idCartaUsuario= cartas.cards[2].code
                console.log(idCartaUsuario);
                if(idCartaUsuario===idRandomCard){
                    alert("woaAA")
                    PartidasGanadas = PartidasGanadas+1
                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    dato1()
                }
                else{
                    alert("nadaaaaaa:(")
                    PartidasPerdidas= PartidasPerdidas+1
                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    dato1()
                }
            }
            function detectarId4(){
                const idCartaUsuario= cartas.cards[3].code
                console.log(idCartaUsuario);
                if(idCartaUsuario===idRandomCard){
                    alert("woaAA")
                    PartidasGanadas = PartidasGanadas+1
                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    dato1()
                }
                else{
                    alert("nadaaaaaa:(")
                    PartidasPerdidas= PartidasPerdidas+1
                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    dato1()
                }
            }
            function detectarId5(){
                const idCartaUsuario= cartas.cards[4].code
                console.log(idCartaUsuario);
                if(idCartaUsuario===randomCard){
                    alert("woaAA")
                    PartidasGanadas = PartidasGanadas+1
                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    dato1()
                }
                else{
                    alert("nadaaaaaa:(")
                    PartidasPerdidas= PartidasPerdidas+1
                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    dato1()
                }
            }
            function detectarId6(){
                const idCartaUsuario= cartas.cards[5].code
                console.log(idCartaUsuario);
                if(idCartaUsuario===idRandomCard){
                    alert("woaAA")
                    PartidasGanadas = PartidasGanadas+1
                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    dato1()
                    
                }
                else{
                    alert("nadaaaaaa:(")
                    PartidasPerdidas= PartidasPerdidas+1
                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    dato1()
                }
            }
            function detectarId7(){
                const idCartaUsuario= cartas.cards[6].code
                console.log(idCartaUsuario);
                if(idCartaUsuario===idRandomCard){
                    alert("woaAA")
                    PartidasGanadas = PartidasGanadas+1
                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    dato1()
                    
                }
                else{
                    alert("nadaaaaaa:(")
                    PartidasPerdidas= PartidasPerdidas+1
                    document.getElementById("carta").innerHTML = `
                        <img src="${randomCard.image}" class="img" id="cartaRandom">
                    `
                    dato1()
                    
                }
            }
            
        })
    })
    
}




//crear variable en el if para crear partida nueva y guardar las ganadas y perdidas y mostrarlas en una tabla y agg estilos y el modo de uso 