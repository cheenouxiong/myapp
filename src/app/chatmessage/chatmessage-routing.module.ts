import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatmessagePage } from './chatmessage.page';

const routes: Routes = [
  {
    path: '',
    component: ChatmessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatmessagePageRoutingModule {}
