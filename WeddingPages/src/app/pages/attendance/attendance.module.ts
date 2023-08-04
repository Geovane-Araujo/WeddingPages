import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './attendance.component';
import { AttendanceTitleComponent } from './components/attendance-title/attendance-title.component';
import { AttendanceConfirmationComponent } from './components/attendance-confirmation/attendance-confirmation.component';



@NgModule({
  declarations: [
    AttendanceComponent,
    AttendanceTitleComponent,
    AttendanceConfirmationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AttendanceModule { }
