import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatPageEightPage } from '../cat-page-eight/cat-page-eight';

/*
  Generated class for the CatPageSeven page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cat-page-seven',
  templateUrl: 'cat-page-seven.html'
})
export class CatPageSevenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pushPage() {
      this.navCtrl.push(CatPageEightPage);
  }

  popPage() {
      this.navCtrl.pop();
  }

}
