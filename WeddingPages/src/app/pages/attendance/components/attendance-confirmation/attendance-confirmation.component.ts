import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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
  public attendanceForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    confirm: new FormControl(false),
    phone: new FormControl(null),
    email: new FormControl(null),
    quantityCompanion: new FormControl(0),
    companion: new FormArray([])
  })

  private lastId: number = 0;

  public addCompanion(): void {
    this.companionList.push({ id: this.lastId++ });
    this.attendanceForm.get('quantityCompanion')?.patchValue(this.companionList.length);
  }

  public removeCompanion(): void {
    this.companionList.pop();
    this.attendanceForm.get('quantityCompanion')?.patchValue(this.companionList.length);
  }
  public sendConfirmation(): void {
    console.log(this.attendanceForm.value);
  }
}
