import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-videocam',
  templateUrl: 'videocam.html'
})
export class VideocamPage {

	objects : any = [
		{
			id: "3RU9qYlg3Dw"
		},
		{
			id: "xNfDwaWQ-UU"
		},
		{
			id: "Papfk6rH0S0"
		},
		{
			id: "2M2461WxDSA"
		},
		{
			id: "7xeYcn0IpF0"
		},
	];

  	constructor(public navCtrl: NavController, public youtube: YoutubeVideoPlayer) {
  		
  	}

  	videoPlay(id) {
  		this.youtube.openVideo(id);
  	}

}
