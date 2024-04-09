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


class TwoSidedMarket extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `<a href="/scope:0.4785388568406725/products/asics-gel-nimbus-26/">Asics Gel Nimbus 26</a>&nbsp;<a href="/scope:0.4785388568406725/products/nb-xc-5k-v6/">NB-XC</a>`;
	}
 }

customElements.define("x-twosided", TwoSidedMarket);