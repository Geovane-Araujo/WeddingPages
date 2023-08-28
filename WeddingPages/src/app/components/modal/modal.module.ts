import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { MessagesModule } from '../messages/messages.module';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    MessagesModule
  ],
  exports: [
    ModalComponent
  ],
  providers: [
    ModalService
  ]
})
export class ModalModule { }
