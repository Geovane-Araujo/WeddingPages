import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalQrCodeService {
  public readonly visible = signal<boolean>(false);
}
