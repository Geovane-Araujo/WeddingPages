import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './attendance.component';
import { AttendanceTitleComponent } from './components/attendance-title/attendance-title.component';
import { AttendanceConfirmationComponent } from './components/attendance-confirmation/attendance-confirmation.component';
import { FormsModule } from '@angular/forms';
import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  declarations: [
    AttendanceComponent,
    AttendanceTitleComponent,
    AttendanceConfirmationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputModule
  ]
})
export class AttendanceModule { }
