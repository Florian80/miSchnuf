import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { HomePatientPage } from '../pages/home-patient/home-patient';
import { HomeDoctorPage } from '../pages/home-doctor/home-doctor';
import { PatientCatPage } from '../pages/patient-cat/patient-cat';
import { PatientSpiroPage } from '../pages/patient-spiro/patient-spiro';
import { PatientArchivePage } from '../pages/patient-archive/patient-archive';
import { PatientAltQuestPage } from '../pages/patient-alt-quest/patient-alt-quest';
import { CatPageOnePage } from '../pages/cat-page-one/cat-page-one';
import { CatPageTwoPage } from '../pages/cat-page-two/cat-page-two';
import { CatPageThreePage } from '../pages/cat-page-three/cat-page-three';
import { CatPageFourPage } from '../pages/cat-page-four/cat-page-four';
import { CatPageFivePage } from '../pages/cat-page-five/cat-page-five';
import { CatPageSixPage } from '../pages/cat-page-six/cat-page-six';
import { CatPageSevenPage } from '../pages/cat-page-seven/cat-page-seven';
import { CatPageEightPage } from '../pages/cat-page-eight/cat-page-eight';


@Component({
    templateUrl: 'app.html',
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  public rootPage: any  = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
