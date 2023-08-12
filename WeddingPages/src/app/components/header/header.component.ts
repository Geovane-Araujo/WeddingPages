import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public dropdownMenus = [
    {
      dropdownTitle: "Páginas",
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
      dropdownContent: [
        {
          title: "Lista de Presentes",
          path: "gifts"
        }
      ]
    },
    {
      dropdownTitle: "Confirmar Presença",
      dropdownContent: [
        {
          title: "Casamento",
          path: "attendance"
        }
      ]
    },
    {
      dropdownTitle: "Idiomas",
      dropdownContent: [
        {
          title: "Lista de Presentes",
          path: "gifts"
        }
      ]
    }
  ];
}
