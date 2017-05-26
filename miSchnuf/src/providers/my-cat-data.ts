import { Injectable, NgModule, Component } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyCATData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyCATData {

    constructor(
        public valueAnswerOne: number,
        public valueAnswerTwo: number,
        public valueAnswerThree: number,
        public valueAnswerFour: number,
        public valueAnswerFive: number,
        public valueAnswerSix: number,
        public valueAnswerSeven: number,
        public valueAnswerEight: number,
        public valueAnswerTotal: number,
    ) { };




}
