import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './attendance.component';
import { AttendanceTitleComponent } from './components/attendance-title/attendance-title.component';
import { AttendanceConfirmationComponent } from './components/attendance-confirmation/attendance-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/components/input/input.module';
import { AttendanceService } from 'src/app/services/attendance.service';

@NgModule({
  declarations: [
    AttendanceComponent,
    AttendanceTitleComponent,
    AttendanceConfirmationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    ReactiveFormsModule
  ],
  providers: [
    AttendanceService
  ]
})
export class AttendanceModule { }
