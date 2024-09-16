//crear un elemento personalizado

class crearBoton extends HTMLElement {
    constructor(){
        super();
        this.textContent = "!Haz click aqui!";
        this.addEventListener("click",()=> alert("good"))
    }
}
customElements.define("mi-boton", crearBoton);


//----------------------------//
class crearBotonShadow extends HTMLElement {
    constructor() {
        super();
        let miShadow = this.attachShadow({ mode: "open" });
        miShadow.innerHTML = `
            <mi-boton></mi-boton>
            <button id="bu">soy un boton lindo!!</button>
        `;
    
        const button = miShadow.getElementById("bu");
        button.addEventListener("click", () => {
            button.style.background="pink"
            alert("hi!");
            this.verClick();
        });
    }
    
    verClick() {
        alert("wao");
    }
}
customElements.define("boton-shadomw", crearBotonShadow)
