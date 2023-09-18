import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalQrCodeComponent } from './modal-qr-code.component';
import { MessagesModule } from '../messages/messages.module';

@NgModule({
  declarations: [
    ModalQrCodeComponent
  ],
  imports: [
    CommonModule,
    MessagesModule
  ],
  exports: [
    ModalQrCodeComponent
  ],
  providers: [
  ]
})
export class ModalQrCodeModule { }
