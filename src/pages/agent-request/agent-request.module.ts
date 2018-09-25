import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentRequestPage } from './agent-request';

@NgModule({
  declarations: [
    AgentRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentRequestPage),
  ],
})
export class AgentRequestPageModule {}
