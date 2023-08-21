import { Component, HostListener } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

constructor(public readonly headerService: HeaderService) {

}

  @HostListener('window:scroll', ['$event'])
  private onScroll($event: Event) {
    this.headerService.positionWindow = window.scrollY;

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
    },
    {
      dropdownTitle: "Idiomas",
      dropdownId: "languages",
      dropdownContent: [
        {
          title: "Lista de Presentes",
          path: "gifts"
        }
      ]
    }
  ];
}
