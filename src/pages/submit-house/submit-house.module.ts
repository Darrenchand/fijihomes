import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmitHousePage } from './submit-house';

@NgModule({
  declarations: [
    SubmitHousePage,
  ],
  imports: [
    IonicPageModule.forChild(SubmitHousePage),
  ],
})
export class SubmitHousePageModule {}
