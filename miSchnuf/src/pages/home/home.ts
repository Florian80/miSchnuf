import { Component } from '@angular/core';
import { HomePatientPage } from '../home-patient/home-patient';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})


export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    pushPage() {
        // push another page on to the navigation stack
        this.navCtrl.push(HomePatientPage);
    }
}