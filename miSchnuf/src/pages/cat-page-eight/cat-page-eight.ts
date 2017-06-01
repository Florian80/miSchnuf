import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MucusQuestPage } from '../mucus-quest/mucus-quest';

/*
  Generated class for the CatPageEight page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cat-page-eight',
  templateUrl: 'cat-page-eight.html'
})
export class CatPageEightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pushPage() {
      this.navCtrl.push(MucusQuestPage);
  }

  popPage() {
      this.navCtrl.pop();
  }

}
