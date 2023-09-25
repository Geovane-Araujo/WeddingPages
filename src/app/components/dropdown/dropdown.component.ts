import { Component, Input } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  public dropdownVisible = false;
  @Input() dropdownTitle: string;
  @Input() dropdownContent: any[];
  @Input() dropdownId: any;
  constructor(public readonly headerService: HeaderService) {

  }
}
