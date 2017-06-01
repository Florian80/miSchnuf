import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatPageSevenPage } from '../cat-page-seven/cat-page-seven';

/*
  Generated class for the CatPageSix page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cat-page-six',
  templateUrl: 'cat-page-six.html'
})
export class CatPageSixPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pushPage() {
      this.navCtrl.push(CatPageSevenPage);
  }

  popPage() {
      this.navCtrl.pop();
  }

}
