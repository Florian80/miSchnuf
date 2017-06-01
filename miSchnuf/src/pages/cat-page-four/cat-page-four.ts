import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatPageFivePage } from '../cat-page-five/cat-page-five';

/*
  Generated class for the CatPageFour page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cat-page-four',
  templateUrl: 'cat-page-four.html'
})
export class CatPageFourPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pushPage() {
      this.navCtrl.push(CatPageFivePage);
  }

  popPage() {
      this.navCtrl.pop();
  }

}
