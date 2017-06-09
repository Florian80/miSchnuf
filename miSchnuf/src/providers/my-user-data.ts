import { Injectable, NgModule, Component } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { Midata } from "midata";
import 'rxjs/add/operator/map';
import { NavController } from "ionic-angular";
import { HomePatientPage } from "../pages/home-patient/home-patient";
     
@Injectable()
export class MyUserData {   /*

    public midata: Midata;
    username: any;
    password: any;

    constructor(public navCtrl: NavController) {

        this.midata = new Midata('https://test.midata.coop:9000', 'miSchnuf', 'mischnufsecret');
   
    }

    login() {

        console.log(username);
        console.log(password);

        midata.login(username, password).then(() => {
            console.info("User id:", midata.user.id);
            this.navCtrl.setRoot(HomePatientPage);
        }, (error) => {
            console.log("You useless prick...", error);
        });
        */
    }