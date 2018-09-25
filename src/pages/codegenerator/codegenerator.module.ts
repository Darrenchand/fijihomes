import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodegeneratorPage } from './codegenerator';

@NgModule({
  declarations: [
    CodegeneratorPage,
  ],
  imports: [
    IonicPageModule.forChild(CodegeneratorPage),
  ],
})
export class CodegeneratorPageModule {}
