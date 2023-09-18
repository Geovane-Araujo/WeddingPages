import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesSummaryComponent } from './component/messages-summary/messages-summary.component';
import { MessagesWritingComponent } from './component/messages-writing/messages-writing.component';
import { MessagesReceivedComponent } from './component/messages-received/messages-received.component';

import { MessagesModule as MessagesModule2 } from '../../components/messages/messages.module';
import { InputModule } from 'src/app/components/input/input.module';



@NgModule({
  declarations: [
    MessagesComponent,
    MessagesSummaryComponent,
    MessagesWritingComponent,
    MessagesReceivedComponent
  ],
  imports: [
    CommonModule,
    MessagesModule2,
    InputModule
  ]
})
export class MessagesModule { }
