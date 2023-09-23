import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages-writing',
  templateUrl: './messages-writing.component.html',
  styleUrls: ['./messages-writing.component.scss']
})
export class MessagesWritingComponent {
  public messageForm: FormGroup = new FormGroup({
    author: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    message: new FormControl(null, Validators.required)
  });

  constructor(public readonly messageService: MessagesService) {
    
  }

  public sendMessage(): void {
    const message = this.messageForm.value;
    if(this.messageForm.valid) {
      this.messageService.postMessage(message)
        .subscribe(res => this.messageService.getMessages())
    }
  }
}
