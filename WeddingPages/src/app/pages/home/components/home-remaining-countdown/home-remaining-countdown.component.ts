import { Component } from '@angular/core';
import { differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears, set } from 'date-fns';

@Component({
  selector: 'app-home-remaining-countdown',
  templateUrl: './home-remaining-countdown.component.html',
  styleUrls: ['./home-remaining-countdown.component.scss']
})
export class HomeRemainingCountdownComponent {
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;
  constructor() {

    setInterval(()=> this.updateCountdown(),1000);
  }
  public updateCountdown() {
    // Exemplo de lógica para atualizar os valores da contagem regressiva
      // Substitua esses valores com sua lógica de contagem regressiva real
      const currentDate: any = new Date();
      const targetDate: any = new Date('2024-01-06'); // Substitua com sua data alvo

      const timeRemaining = targetDate - currentDate;
      this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Chame a função inicialmente e a cada segundo para atualizar a contagem regressiva
  }
}
