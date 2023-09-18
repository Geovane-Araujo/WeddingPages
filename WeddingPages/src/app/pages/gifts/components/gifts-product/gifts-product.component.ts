import { Component, Input } from '@angular/core';
import { ModalQrCodeService } from 'src/app/components/modal-qr-code/modal-qr-code.service';

export interface GiftList {
  image: string;
  description: string;
  value: string;
}

@Component({
  selector: 'app-gifts-product',
  templateUrl: './gifts-product.component.html',
  styleUrls: ['./gifts-product.component.scss']
})
export class GiftsProductComponent {
  @Input({ required: true }) image: string;
  @Input({ required: true }) description: string;
  @Input({ required: true }) value: string;

  constructor(private readonly modalQrCodeService: ModalQrCodeService) {}

  public openModalQrCode(): void {
    this.modalQrCodeService.visible.set(true)
  }
}
