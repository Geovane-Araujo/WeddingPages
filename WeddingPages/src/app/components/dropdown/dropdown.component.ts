import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  public dropdownVisible = false;
  @Input() dropdownTitle: string;
  @Input() dropdownContent: any[];
}
