import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from 'src/app/components/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class InputModule { }
