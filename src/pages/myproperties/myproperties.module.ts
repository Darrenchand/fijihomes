import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MypropertiesPage } from './myproperties';

@NgModule({
  declarations: [
    MypropertiesPage,
  ],
  imports: [
    IonicPageModule.forChild(MypropertiesPage),
  ],
})
export class MypropertiesPageModule {}
