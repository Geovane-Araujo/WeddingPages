import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label: string;
  @Input() idFor: string;

  @Input() control: any;

  public value: string;

  public onChangeValue(): void {
    if(this.control.value !== this.value) {
      this.control.patchValue(this.value);
    }
  }
}
