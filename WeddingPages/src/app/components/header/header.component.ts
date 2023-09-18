import { Component, HostListener } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isMobile: boolean;

  constructor(public readonly headerService: HeaderService) {

  }

  public dropdownMenus = [
    {
      dropdownTitle: "Páginas",
      dropdownId: "pages",
      dropdownContent: [
        {
          title: "Página Inicial",
          path: "/"
        },
        {
          title: "Nossa história",
          path: "about",
        },
        {
          title: "Mensagens",
          path: "messages",
        }
      ]
    },
    {
      dropdownTitle: "Presentes",
      dropdownId: "gifts",
      dropdownContent: [
        {
          title: "Lista de Presentes",
          path: "gifts"
        }
      ]
    },
    {
      dropdownTitle: "Confirmar Presença",
      dropdownId: "attendance",
      dropdownContent: [
        {
          title: "Casamento",
          path: "attendance"
        }
      ]
    }
  ];

  @HostListener('window:scroll', ['$event'])
  private onScroll($event: Event) {
    this.setHeaderConfig();
  }

  @HostListener('window:load', ['$event'])
  private onLoad($event: any) {
    this.isMobile = window.innerWidth <= 768;
    this.setHeaderConfig();
  }

  @HostListener('window:resize', ['$event'])
  private onResize($event: any) {
    this.isMobile = $event.target.outerWidth <= 768;
  }

  private setHeaderConfig(): void {
    this.headerService.positionWindow = window.scrollY;

    const location = window.location.pathname;
    if(location === "/") {
      this.headerService.positionWindow = window.scrollY;
    } else {
      this.headerService.positionWindow = 1;
    }
  }
}
