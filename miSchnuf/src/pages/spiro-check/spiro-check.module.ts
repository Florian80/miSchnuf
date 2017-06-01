import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpiroCheckPage } from './spiro-check';

@NgModule({
  declarations: [
    SpiroCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(SpiroCheckPage),
  ],
  exports: [
    SpiroCheckPage
  ]
})
export class SpiroCheckPageModule {}
