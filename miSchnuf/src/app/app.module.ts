import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
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
import { MyCATData } from '../providers/my-cat-data';
import { MySpiroData } from '../providers/my-spiro-data';
import { MyUserData } from '../providers/my-user-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomePatientPage,
    HomeDoctorPage,
    PatientCatPage,
    PatientSpiroPage,
    PatientArchivePage,
    PatientAltQuestPage,
    CatPageOnePage,
    CatPageTwoPage,
    CatPageThreePage,
    CatPageFourPage,
    CatPageFivePage,
    CatPageSixPage,
    CatPageSevenPage,
    CatPageEightPage
  ],
  imports: [
      BrowserModule,
      HttpModule,
      IonicModule.forRoot(MyApp),
      BrowserModule,
      ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomePatientPage,
    HomeDoctorPage,
    PatientCatPage,
    PatientSpiroPage,
    PatientArchivePage,
    PatientAltQuestPage,
    CatPageOnePage,
    CatPageTwoPage,
    CatPageThreePage,
    CatPageFourPage,
    CatPageFivePage,
    CatPageSixPage,
    CatPageSevenPage,
    CatPageEightPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, SplashScreen, StatusBar, MyCATData, MySpiroData, MyUserData]
})
export class AppModule {}
