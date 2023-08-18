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
