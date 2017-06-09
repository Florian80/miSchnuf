import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePatientPage } from "../home-patient/home-patient";
import { NavController } from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Midata } from "midata";
import { MyUserData } from "../../providers/my-user-data";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [MyUserData]
})
export class HomePage {

    constructor(public navCtrl: NavController, public midata: Midata, public username: string, public password: string;) {

        midata = new Midata('https://test.midata.coop:9000', 'miSchnuf', 'mischnufsecret');

    }

    pushPage() {
        // push another page on to the navigation stack
        this.navCtrl.push(HomePatientPage);
    }

    login() {

        this.midata.login(this.username, this.password, "member").then(() => {
            console.info("User id:", this.midata.user.id);
            this.navCtrl.setRoot(HomePatientPage);
        }, (error) => {
            console.log("You useless brick...", error);
            });

    }

}