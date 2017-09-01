import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-model',
  templateUrl: 'model.html'
})
export class ModelPage {

  br_id: any;
	lu_id: any;
	lu_name: any;
  cart_col: any;
  cart_name: any;
  gn_id: any;
  gn_name: any;
  gn_minyear: any;
  gn_maxyear: any;

  mds: any;
	loader: any;

	constructor(public navCtrl: NavController, public params: NavParams, private http:Http, public loadingCtrl: LoadingController) {

		this.loader = this.loadingCtrl.create();
		this.loader.present();

    this.mds = null;
    this.br_id = params.get('br_id');
    this.lu_id = params.get('lu_id');
    this.lu_name = params.get('lu_name');
    this.cart_col = params.get('cart_col');
    this.cart_name = params.get('cart_name');
    this.gn_id = params.get('gn_id');
    this.gn_name = params.get('gn_name');
    this.gn_minyear = params.get('gn_minyear');
    this.gn_maxyear = params.get('gn_maxyear');

    this.loader.dismiss();
	}

	ionViewDidEnter() {

    // var url_selectmd = 'http://ec2-13-124-130-63.ap-northeast-2.compute.amazonaws.com/api/selectmd?br_id=';
    // this.http.get(url_selectmd+this.br_id+'&lu_id='+this.lu_id+'&cart_col='+this.cart_col).map(res => res.json())
    //   .subscribe(data => {
    //     this.mds = data;
    //     this.loader.dismiss();
    //   });
	}

  mdClick(mdId, mdName){

  }

}
