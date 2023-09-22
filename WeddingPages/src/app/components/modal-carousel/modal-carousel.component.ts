import { Component } from '@angular/core';
import { ModalCarouselService } from './modal-carousel.service';
import * as moment from 'moment';

@Component({
  selector: 'app-modal-carousel',
  templateUrl: './modal-carousel.component.html',
  styleUrls: ['./modal-carousel.component.scss']
})
export class ModalCarouselComponent {
  private readonly months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  constructor(public readonly modalCarouselService: ModalCarouselService) {

  }

  public getCurrentDate() {
    const day = moment(new Date()).format("DD");
    const month = this.months[Number(moment(new Date()).format("MM")) - 1];
    const fullyear = moment(new Date()).format("YYYY");

    return `${day} de ${month} de ${fullyear}`;
  }
}
