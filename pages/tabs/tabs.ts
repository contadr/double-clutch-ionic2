import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { VideocamPage } from '../videocam/videocam';
import { DrivePage } from '../drive/drive';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = VideocamPage;
  tab4Root = DrivePage;
  tab5Root = MorePage;

  constructor() {

  }
  
}
