import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { VideocamPage } from '../pages/videocam/videocam';
import { DrivePage } from '../pages/drive/drive';
import { MorePage } from '../pages/more/more';
import { TabsPage } from '../pages/tabs/tabs';
import { GenerationPage } from '../pages/generation/generation';
import { ModelPage } from '../pages/model/model';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    VideocamPage,
    DrivePage,
    MorePage,
    TabsPage,
    GenerationPage,
    ModelPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    VideocamPage,
    DrivePage,
    MorePage,
    TabsPage,
    GenerationPage,
    ModelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YoutubeVideoPlayer,
    InAppBrowser
  ]
})
export class AppModule {}
