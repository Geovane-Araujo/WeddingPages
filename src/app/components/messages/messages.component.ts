import { Component, Input } from '@angular/core';

interface IMessage {
  message: string;
  author: string;
}

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  @Input({ required: true }) messages: IMessage[];

}
