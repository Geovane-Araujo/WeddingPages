import { Component } from '@angular/core';
import { HeaderService } from './components/header/header.service';
import { ModalCarouselService } from './components/modal-carousel/modal-carousel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public readonly headerService: HeaderService,
    public readonly modalCarouselService: ModalCarouselService) {

  }
}
