import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './attendance.component';
import { AttendanceTitleComponent } from './components/attendance-title/attendance-title.component';
import { AttendanceConfirmationComponent } from './components/attendance-confirmation/attendance-confirmation.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AttendanceComponent,
    AttendanceTitleComponent,
    AttendanceConfirmationComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AttendanceModule { }
