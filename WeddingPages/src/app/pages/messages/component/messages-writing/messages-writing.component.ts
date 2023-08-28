import { Component } from '@angular/core';

@Component({
  selector: 'app-messages-writing',
  templateUrl: './messages-writing.component.html',
  styleUrls: ['./messages-writing.component.scss']
})
export class MessagesWritingComponent {
  public messages = [
    { content: "Amo vocês", author: "Adriana Cristina" },
    { content: "Amo vocês1", author: "Adriana Cristina1" },
  ];
}
