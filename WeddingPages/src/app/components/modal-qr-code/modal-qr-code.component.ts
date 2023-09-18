import { Component } from '@angular/core';
import { ModalQrCodeService } from './modal-qr-code.service';

@Component({
  selector: 'app-modal-qr-code',
  templateUrl: './modal-qr-code.component.html',
  styleUrls: ['./modal-qr-code.component.scss']
})
export class ModalQrCodeComponent {
  constructor(public readonly modalQrCodeService: ModalQrCodeService) {}

  public hideModal(): void {
    this.modalQrCodeService.visible.set(false);
  }
}
