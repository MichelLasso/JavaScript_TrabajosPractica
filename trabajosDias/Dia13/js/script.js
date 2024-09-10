
let empezar = document.getElementById("empezar")
empezar.addEventListener("click", dato1);

function dato1() {
    empezar.style ="display: none"
    
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
            
            document.getElementById("carta").innerHTML = `
                
                <img src="${cartas.cards[0].image}" class="img">
                
            </img>`
            
            document.getElementById("carta2").innerHTML = `
                
                <img src="${cartas.cards[3].image}" class="img">
                <img src="${cartas.cards[0].image}" class="img">
                <img src="${cartas.cards[6].image}" class="img">
                <img src="${cartas.cards[4].image}" class="img">
                <img src="${cartas.cards[5].image}" class="img">
            `
        })
    })
    
}




