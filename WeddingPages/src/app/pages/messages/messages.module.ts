import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesSummaryComponent } from './component/messages-summary/messages-summary.component';
import { MessagesWritingComponent } from './component/messages-writing/messages-writing.component';
import { MessagesReceivedComponent } from './component/messages-received/messages-received.component';



@NgModule({
  declarations: [
    MessagesComponent,
    MessagesSummaryComponent,
    MessagesWritingComponent,
    MessagesReceivedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MessagesModule { }
