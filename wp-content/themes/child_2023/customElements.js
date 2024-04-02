class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);


//Class JagWasHere extends HTMLElement{
//	connectCallback(){
//		this.innerHTML = "Jag was here";
		
//	}
// }

// customElements.define("x-jag", JagWasHere);


//class TwoSidedMarket extends HTMLElement{
//	connectedCallback(){
//		this.innerHTML = `<a herf="side-a">Side A</a>&nbsp;<a href="side-b">Side B</a>`;
//	}
// }

//customElements.define("x-twosided"), (TwoSidedMartet);