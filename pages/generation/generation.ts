import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ModelPage } from '../model/model';

@Component({
  selector: 'page-generation',
  templateUrl: 'generation.html'
})
export class GenerationPage {

	br_id: any;
	lu_id: any;
	lu_name: any;
  	cart_col: any;
  	cart_name: any;
 	gns: any;
	loader: any;

	constructor(public navCtrl: NavController, public params: NavParams, private http:Http, public loadingCtrl: LoadingController) {
	
		this.loader = this.loadingCtrl.create();
		this.loader.present();

	    this.gns = null;
	    this.br_id = params.get('br_id');
	    this.lu_id = params.get('lu_id');
	    this.lu_name = params.get('lu_name');
	    this.cart_col = params.get('cart_col');
	    this.cart_name = params.get('cart_name');
	}

	ionViewDidEnter() {

    var url_selectgn = 'http://contadr.org/api/selectgn?br_id=';
    this.http.get(url_selectgn+this.br_id+'&lu_id='+this.lu_id+'&cart_col='+this.cart_col).map(res => res.json())
      .subscribe(data => {

        this.gns = data;
        console.log(this.gns);
        this.loader.dismiss();
      });
	}

  gnClick(gnId, gnName, gnMinYear, gnMaxYear){
    this.navCtrl.push(ModelPage, {
		br_id: this.br_id,
		lu_id: this.lu_id,
		lu_name: this.lu_name,
		cart_col: this.cart_col,
		cart_name: this.cart_name,
		gn_id: gnId,
		gn_name: gnName,
		gn_minyear: gnMinYear,
		gn_maxyear: gnMaxYear
	});
}

}
