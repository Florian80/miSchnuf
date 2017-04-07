import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomePatientPage } from '../pages/home-patient/home-patient';
import { PatientCatPage } from '../pages/patient-cat/patient-cat';
import { PatientSpiroPage } from '../pages/patient-spiro/patient-spiro';
import { MyCATData } from '../providers/my-cat-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomePatientPage,
    PatientCatPage,
    PatientSpiroPage  
  ],
  imports: [
      IonicModule.forRoot(MyApp),
      FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomePatientPage,
    PatientCatPage,
    PatientSpiroPage,
    MyCATData

  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
      { provide: MyCATData, useClass: MyApp}]
})
export class AppModule {}
