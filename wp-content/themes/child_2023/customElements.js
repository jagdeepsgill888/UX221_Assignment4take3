class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);


class RunTrailSpot extends HTMLElement{
 connectedCallback(){
		this.innerHTML = "<strong>Dikes Trail</strong>,";
		
	}
 }

customElements.define("x-trail", RunTrailSpot);


//class TwoSidedMarket extends HTMLElement{
//	connectedCallback(){
//		this.innerHTML = `<a herf="side-a">Side A</a>&nbsp;<a href="side-b">Side B</a>`;
//	}
// }

//customElements.define("x-twosided"), (TwoSidedMartet);