import { AttendanceService } from './../../../../services/attendance.service';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

interface Companion {
  id: number;
}

@Component({
  selector: 'app-attendance-confirmation',
  templateUrl: './attendance-confirmation.component.html',
  styleUrls: ['./attendance-confirmation.component.scss']
})
export class AttendanceConfirmationComponent {
  public confirmationValid: Boolean=false;
  public companionList: Companion[] = [];
  public attendanceForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    confirm: new FormControl(false, Validators.required),
    phone: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    quantityCompanion: new FormControl(0),
    companion: new FormControl([])
  })

  private lastId: number = 0;

  constructor(private readonly attendanceService: AttendanceService) {
  }

  public addCompanion(): void {
    this.companionList.push({ id: this.lastId++ });
    this.attendanceForm.get('quantityCompanion')?.patchValue(this.companionList.length);
  }

  public removeCompanion(): void {
    this.companionList.pop();
    this.attendanceForm.get('quantityCompanion')?.patchValue(this.companionList.length);
  }

  public sendConfirmation(): void {
    this.getCompanionList();
    if(this.attendanceForm.valid) {
      this.attendanceService.postAttendance(this.attendanceForm.value).subscribe(res=>this.confirmationValid=true);
    }
  }

  public getCompanionList(): void {
    const divInput = Array.from(document.querySelectorAll(".companions-gk3"));
    const input = divInput.map(div=>div.querySelector("input"));
    const values = input.map(item=>item?.value);
    this.attendanceForm.get('companion')?.patchValue(values);
  }
}
