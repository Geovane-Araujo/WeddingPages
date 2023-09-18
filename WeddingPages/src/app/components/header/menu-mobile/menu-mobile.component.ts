import { Component } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {
  constructor(private readonly headerService: HeaderService) {
    
  }

  public hiddenMenu(): void {
    this.headerService.showMenuMobile = false;
  }
}
