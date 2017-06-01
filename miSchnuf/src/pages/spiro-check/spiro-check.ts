import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePatientPage } from '../home-patient/home-patient';

/**
 * Generated class for the SpiroCheckPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-spiro-check',
  templateUrl: 'spiro-check.html',
})
export class SpiroCheckPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushPage() {
      this.navCtrl.push(HomePatientPage);
  }

  popPage() {
      this.navCtrl.pop();
  }

}
