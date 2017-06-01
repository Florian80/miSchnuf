import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatPageSixPage } from '../cat-page-six/cat-page-six';

/*
  Generated class for the CatPageFive page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cat-page-five',
  templateUrl: 'cat-page-five.html'
})
export class CatPageFivePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pushPage() {
      this.navCtrl.push(CatPageSixPage);
  }

  popPage() {
      this.navCtrl.pop();
  }

}
