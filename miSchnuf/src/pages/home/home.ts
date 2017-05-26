import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { HomePatientPage } from '../home-patient/home-patient';
import { NavController } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Midata } from 'midata';

let midata: Midata;
let userInfo: { name: any, password: any };

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public myForm: FormGroup;
    public userInfo: { name: string, password: string };
    public midata: Midata;

    constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {

        this.userInfo = { name:'', password:'' };
        this.midata = new Midata('https://test.midata.coop:9000', 'miSchnuf', 'mischnufsecret');
        this.myForm = this.formBuilder.group({
            name: ['', this.nameValidator.bind(this)],
            password: ['', this.passwordValidator.bind(this)]
        });

    }

    pushPage() {
        // push another page on to the navigation stack
        this.navCtrl.push(HomePatientPage);
    }


    nameValidator(control: FormControl): { [s: string]: boolean } {
        if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
            return { invalidName: true };
        }
    }

    passwordValidator(control: FormControl): { [s: string]: boolean } {
        if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
            return { invalidPassword: true };
        }
    }

    login() {
        midata.login(userInfo.name, userInfo.password).then(() => {
            console.info("User id:", midata.user.id);
            this.navCtrl.setRoot(HomePatientPage);
        }, (error) => {
            console.log("You useless brick...", error);
        });
    }

}