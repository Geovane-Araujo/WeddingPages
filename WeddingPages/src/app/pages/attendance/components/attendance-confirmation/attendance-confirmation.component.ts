import { Component } from '@angular/core';

interface Companion {
  id: number;
}

@Component({
  selector: 'app-attendance-confirmation',
  templateUrl: './attendance-confirmation.component.html',
  styleUrls: ['./attendance-confirmation.component.scss']
})
export class AttendanceConfirmationComponent {
  public companionList: Companion[] = [];

  private lastId: number = 0;

  public addCompanion(): void {
    this.companionList.push({ id: this.lastId++ });
  }

  public removeCompanion(): void {
    this.companionList.pop();
  }
}
