import { Component, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { HomePatientPage } from "../home-patient/home-patient";
import { NavController } from "ionic-angular";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { Midata } from "midata";
import { MyUserData } from "../../providers/my-user-data";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [MyUserData]
})
export class HomePage {

    public myForm: FormGroup;
    public midata: Midata;

    constructor(public navCtrl: NavController, private myUserData: MyUserData) {

        this.midata = new Midata('https://test.midata.coop:9000', 'miSchnuf', 'mischnufsecret');

    }

    pushPage() {
        // push another page on to the navigation stack
        this.navCtrl.push(HomePatientPage);
    }

}