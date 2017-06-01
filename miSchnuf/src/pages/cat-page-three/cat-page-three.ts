import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatPageFourPage } from '../cat-page-four/cat-page-four';

/*
  Generated class for the CatPageThree page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cat-page-three',
  templateUrl: 'cat-page-three.html'
})
export class CatPageThreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pushPage() {
      this.navCtrl.push(CatPageFourPage);
  }

  popPage() {
      this.navCtrl.pop();
  }

}
