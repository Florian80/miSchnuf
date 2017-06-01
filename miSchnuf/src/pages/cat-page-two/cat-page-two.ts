import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatPageThreePage } from '../cat-page-three/cat-page-three';

/*
  Generated class for the CatPageTwo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cat-page-two',
  templateUrl: 'cat-page-two.html'
})
export class CatPageTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pushPage() {
      this.navCtrl.push(CatPageThreePage);
  }

  popPage() {
      this.navCtrl.pop();
  }

}
