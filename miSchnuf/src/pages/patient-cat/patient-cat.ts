import { Component, Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyCATData } from '../providers/my-cat-data';
import { NgModule, ErrorHandler } from '@angular/core';

/*
  Generated class for the PatientCat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-patient-cat',
  templateUrl: 'patient-cat.html'
})

@Injectable()
export class PatientCatPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {

      console.log('ionViewDidLoad PatientCatPage');
    
      }

}
