import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { HomePatientPage } from '../home-patient/home-patient';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})


export class HomePage implements OnInit {


    myForm: FormGroup;
    userInfo: { name: string, password: string } = { name: '', password: '' };

    constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {

    }

    ngOnInit(): any {

        this.myForm = this.formBuilder.group({
            'name': ['', this.nameValidator.bind(this)],
            'password': ['', this.passwordValidator.bind(this)]
        });

    }

    pushPage() {
        // push another page on to the navigation stack
        this.navCtrl.push(HomePatientPage);
    }

    onSubmit() {

        console.log('submitting form');

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

}