import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatPageResultPage } from './cat-page-result';

@NgModule({
  declarations: [
    CatPageResultPage,
  ],
  imports: [
    IonicPageModule.forChild(CatPageResultPage),
  ],
  exports: [
    CatPageResultPage
  ]
})
export class CatPageResultPageModule {}
