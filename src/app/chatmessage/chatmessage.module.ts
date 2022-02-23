import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatmessagePageRoutingModule } from './chatmessage-routing.module';

import { ChatmessagePage } from './chatmessage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatmessagePageRoutingModule
  ],
  declarations: [ChatmessagePage]
})
export class ChatmessagePageModule {}
