import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomePatientPage } from '../pages/home-patient/home-patient';
import { PatientCatPage } from '../pages/patient-cat/patient-cat';
import { PatientSpiroPage } from '../pages/patient-spiro/patient-spiro';
import { PatientArchivePage } from '../pages/patient-archive/patient-archive';
import { PatientAltQuestPage } from '../pages/patient-alt-quest/patient-alt-quest';
import { MyCATData } from '../providers/my-cat-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomePatientPage,
    PatientCatPage,
    PatientSpiroPage,
    PatientArchivePage,
    PatientAltQuestPage
  ],
  imports: [
      IonicModule.forRoot(MyApp),
      BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomePatientPage,
    PatientCatPage,
    PatientSpiroPage,
    PatientArchivePage,
    PatientAltQuestPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
