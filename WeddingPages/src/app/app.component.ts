import { Component } from '@angular/core';
import { HeaderService } from './components/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeddingPages';
  constructor(public readonly headerService: HeaderService) {

  }
}
