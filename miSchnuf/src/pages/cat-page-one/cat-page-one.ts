import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatPageTwoPage } from '../cat-page-two/cat-page-two';

/*
  Generated class for the CatPageOne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cat-page-one',
  templateUrl: 'cat-page-one.html'
})
export class CatPageOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pushPage() {
      this.navCtrl.push(CatPageTwoPage);
  }

  popPage() {
      this.navCtrl.pop();
  }

}
