import { Component, HostListener } from '@angular/core';
import { HeaderService } from './components/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public readonly headerService: HeaderService) {

  }
}
