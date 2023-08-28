import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public messages = [
    { content: "Lindo o casal" , author: "Jonas Ewerton"}
  ];

  constructor(public readonly modalService: ModalService) {}

  public hideModal(): void {
    this.modalService.id.set(null);
  }

  public goToPrevious(): void {
    this.modalService.id.update(id => id !== null && id !== 0 ? id - 1 : id);
  }

  public goToNext(): void {
    this.modalService.id.update(id => id !== null && id !== 10 ? id + 1 : id);
  }
}
