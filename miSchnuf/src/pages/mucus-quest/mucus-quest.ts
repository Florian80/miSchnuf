import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpiroCheckPage } from '../spiro-check/spiro-check';

/**
 * Generated class for the MucusQuestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mucus-quest',
  templateUrl: 'mucus-quest.html',
})
export class MucusQuestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushPage() {
      this.navCtrl.push(SpiroCheckPage);
  }

  popPage() {
      this.navCtrl.pop();
  }

}
