import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PatientCatPage } from '../patient-cat/patient-cat';
import { PatientSpiroPage } from '../patient-spiro/patient-spiro';

@Component({
  selector: 'page-home-patient',
  templateUrl: 'home-patient.html'
})
export class HomePatientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pushPageCat() {
      // push another page on to the navigation stack
      this.navCtrl.push(PatientCatPage);
  }

  pushPageSpiro() {
      // push another page on to the navigation stack
      this.navCtrl.push(PatientSpiroPage);
  }

}
