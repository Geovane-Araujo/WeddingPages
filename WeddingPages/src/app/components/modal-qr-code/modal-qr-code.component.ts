import { Component } from '@angular/core';
import { ModalQrCodeService } from './modal-qr-code.service';

@Component({
  selector: 'app-modal-qr-code',
  templateUrl: './modal-qr-code.component.html',
  styleUrls: ['./modal-qr-code.component.scss']
})
export class ModalQrCodeComponent {
  private readonly QRCODE = "00020126580014BR.GOV.BCB.PIX01360207290c-f3f3-4716-b0c2-bb78944e446f5204000053039865802BR5922Messias Silva de Paulo6009SAO PAULO61080540900062240520eVwMuV3HFgaSga923esk630401D8";
  constructor(public readonly modalQrCodeService: ModalQrCodeService) {}

  public hideModal(): void {
    this.modalQrCodeService.visible.set(false);
  }

  public copyQrCode(): void {
    navigator.clipboard.writeText(this.QRCODE);
  }
}
