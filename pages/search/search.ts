import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GenerationPage } from '../generation/generation';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
	btnCountry: boolean=true;
	url_selectbr: any='http://contadr.org/api/selectbr?br_country=';
	krs: any; uss: any; des: any; its: any;  gbs: any; frs: any;
	ses: any; jps: any; cns: any; ins: any;  aus: any; czs: any;
	carts: any = new Array();
	lus: any = new Array();

	current_cart: any;

	current_br_id: any;
	loader: any;

	constructor(public navCtrl: NavController, private http:Http, public loadingCtrl: LoadingController) {
		this.cartsHide();
		this.lusHide();
	}

	ionViewDidEnter() {
		//this.cartsHide();
		this.http.get('http://contadr.org/dojo/json/test/').map(res => res.json())
			.subscribe(data => {
				console.log(data);
      	});
	}

	countryClick_kr(){ this.cartsHide(); this.lusHide(); this.current_br_id=null;
		if(!this.krs){ this.loader = this.loadingCtrl.create(); this.loader.present(); this.brsHide();
			this.http.get(this.url_selectbr+'KR').map(res => res.json())
				.subscribe(data => {
	          		this.krs = data;
	          		this.loader.dismiss();
	      	});
		}else{ this.krs = null; }
	}

	countryClick_us(){ this.cartsHide(); this.lusHide(); this.current_br_id=null;
		if(!this.uss){ this.loader = this.loadingCtrl.create(); this.loader.present(); this.brsHide();
			this.http.get(this.url_selectbr+'US').map(res => res.json())
				.subscribe(data => {
	          		this.uss = data;
	          		this.loader.dismiss();
	      	});
		}else{ this.uss = null; }
	}

	countryClick_de(){ this.cartsHide(); this.lusHide(); this.current_br_id=null;
		if(!this.des){ this.loader = this.loadingCtrl.create(); this.loader.present(); this.brsHide();
			this.http.get(this.url_selectbr+'DE').map(res => res.json())
				.subscribe(data => {
	          		this.des = data;
	          		this.loader.dismiss();
	      	});
		}else{ this.des = null; }
	}

	countryClick_it(){ this.cartsHide(); this.lusHide(); this.current_br_id=null;
		if(!this.its){ this.loader = this.loadingCtrl.create(); this.loader.present(); this.brsHide();
			this.http.get(this.url_selectbr+'IT').map(res => res.json())
				.subscribe(data => {
	          		this.its = data;
	          		this.loader.dismiss();
	      	});
		}else{ this.its = null; }
	}

	countryClick_gb(){ this.cartsHide(); this.lusHide(); this.current_br_id=null;
		if(!this.gbs){ this.loader = this.loadingCtrl.create(); this.loader.present(); this.brsHide();
			this.http.get(this.url_selectbr+'GB').map(res => res.json())
				.subscribe(data => {
	          		this.gbs = data;
	          		this.loader.dismiss();
	      	});
		}else{ this.gbs = null; }
	}

	countryClick_fr(){ this.cartsHide(); this.lusHide(); this.current_br_id=null;
		if(!this.frs){ this.loader = this.loadingCtrl.create(); this.loader.present(); this.brsHide();
			this.http.get(this.url_selectbr+'FR').map(res => res.json())
				.subscribe(data => {
	          		this.frs = data;
	          		this.loader.dismiss();
	      	});
		}else{ this.frs = null; }
	}

	countryClick_se(){ this.cartsHide(); this.lusHide(); this.current_br_id=null;
		if(!this.ses){ this.loader = this.loadingCtrl.create(); this.loader.present(); this.brsHide();
			this.http.get(this.url_selectbr+'SE').map(res => res.json())
				.subscribe(data => {
	          		this.ses = data;
	          		this.loader.dismiss();
	      	});
		}else{ this.ses = null; }
	}

	countryClick_jp(){ this.cartsHide(); this.lusHide(); this.current_br_id=null;
		if(!this.jps){ this.loader = this.loadingCtrl.create(); this.loader.present(); this.brsHide();
			this.http.get(this.url_selectbr+'JP').map(res => res.json())
				.subscribe(data => {
	          		this.jps = data;
	          		this.loader.dismiss();
	      	});
		}else{ this.jps = null; }
	}

	countryClick_cn(){ this.cartsHide(); this.lusHide(); this.current_br_id=null;
		if(!this.cns){ this.loader = this.loadingCtrl.create(); this.loader.present(); this.brsHide();
			this.http.get(this.url_selectbr+'CN').map(res => res.json())
				.subscribe(data => {
	          		this.cns = data;
	          		this.loader.dismiss();
	      	});
		}else{ this.cns = null; }
	}

	countryClick_in(){ this.cartsHide(); this.lusHide(); this.current_br_id=null;
		if(!this.ins){ this.loader = this.loadingCtrl.create(); this.loader.present(); this.brsHide();
			this.http.get(this.url_selectbr+'IN').map(res => res.json())
				.subscribe(data => {
	          		this.ins = data;
	          		this.loader.dismiss();
	      	});
		}else{ this.ins = null; }
	}

	countryClick_au(){ this.cartsHide(); this.lusHide(); this.current_br_id=null;
		if(!this.aus){ this.loader = this.loadingCtrl.create(); this.loader.present(); this.brsHide();
			this.http.get(this.url_selectbr+'AU').map(res => res.json())
				.subscribe(data => {
	          		this.aus = data;
	          		this.loader.dismiss();
	      	});
		}else{ this.aus = null; }
	}

	countryClick_cz(){ this.cartsHide(); this.lusHide(); this.current_br_id=null;
		if(!this.czs){ this.loader = this.loadingCtrl.create(); this.loader.present(); this.brsHide();
			this.http.get(this.url_selectbr+'CZ').map(res => res.json())
				.subscribe(data => {
	          		this.czs = data;
	          		this.loader.dismiss();
	      	});
		}else{ this.czs = null; }
	}

	brClick(br_id) {
		this.loader = this.loadingCtrl.create(); this.loader.present();
		this.cartsHide(); this.lusHide();
		this.current_br_id = br_id;
		var url_selectcart = 'http://contadr.org/api/selectcart?br_id=';
		this.http.get(url_selectcart+br_id).map(res => res.json())
			.subscribe(data => {
				// Call cartype
				this.carts = data;
				this.loader.dismiss();
      	});
	}

	cartClick(col){
		if(this.current_cart != col){
			this.loader = this.loadingCtrl.create(); this.loader.present();
			this.lusHide(); this.current_cart = col;
			var url_selectlu = 'http://contadr.org/api/selectlu?br_id=';
			this.http.get(url_selectlu+this.current_br_id+'&cart='+col).map(res => res.json())
				.subscribe(data => {
					this.lus = data;
					this.loader.dismiss();
	      	});
		}else{ this.lusHide(); }
	}

	luClick(luId, luName, cartCol, cartName){
		this.navCtrl.push(GenerationPage, {
			br_id: this.current_br_id,
			lu_id: luId,
			lu_name: luName,
			cart_col: cartCol,
			cart_name: cartName
		});
	}

	brsHide(){
		this.krs = null; this.uss = null; this.des = null; this.its = null; 
		this.gbs = null; this.frs = null; this.ses = null; this.jps = null; 
		this.cns = null; this.ins = null; this.aus = null; this.czs = null;
	}

	cartsHide(){
		this.carts = [];
	}

	lusHide(){
		this.lus = null;
		this.current_cart = null;
	}

}
