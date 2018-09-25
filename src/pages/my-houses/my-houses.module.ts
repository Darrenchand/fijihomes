import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyHousesPage } from './my-houses';

@NgModule({
  declarations: [
    MyHousesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyHousesPage),
  ],
})
export class MyHousesPageModule {}
