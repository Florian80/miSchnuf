import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { HomePatientPage } from '../pages/home-patient/home-patient';
import { PatientCatPage } from '../pages/patient-cat/patient-cat';
import { PatientSpiroPage } from '../pages/patient-spiro/patient-spiro';
import { MyCATData } from '../providers/my-cat-Data';


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
