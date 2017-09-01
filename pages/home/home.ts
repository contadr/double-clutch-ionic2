import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Slides) slides: Slides;

  	constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  	}

  	ionViewDidEnter() {
		this.slides.startAutoplay();
	}

  	youtube(){
  		this.iab.create('https://www.youtube.com/user/whwhdtk111');
  	}
    facebook(){
      this.iab.create('https://www.facebook.com/DoubleClutchTransmission/');
    }

  	knowledgeCar(){
  		alert("자동차 상식");
  	}

  	bestsearchCar(){
  		alert("많이 찾는 자동차");
  	}

  	hotCar(){
  		alert("핫한 자동차");
  	}

  	hotVideo(){
  		alert("핫한 영상");
  	}

  	newCar(){
  		alert("신차 정보");
  	}

    driveCource(){
      alert("드라이브 코스");
    }

    blackBox(){
      alert("블랙박스 세상");
    }

    carWash(){
      alert("세차장 정보");
    }

}
