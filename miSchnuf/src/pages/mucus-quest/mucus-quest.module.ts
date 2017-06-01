import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MucusQuestPage } from './mucus-quest';

@NgModule({
  declarations: [
    MucusQuestPage,
  ],
  imports: [
    IonicPageModule.forChild(MucusQuestPage),
  ],
  exports: [
    MucusQuestPage
  ]
})
export class MucusQuestPageModule {}
