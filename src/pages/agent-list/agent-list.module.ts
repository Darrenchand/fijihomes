import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentListPage } from './agent-list';

@NgModule({
  declarations: [
    AgentListPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentListPage),
  ],
})
export class AgentListPageModule {}
