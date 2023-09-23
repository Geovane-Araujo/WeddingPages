import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Message {
  id?: string,
	message: string,
	author: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public messages: any = [];

  constructor(private readonly httClient: HttpClient) { }

  public getMessages() {
    this.httClient.get("/message").subscribe((res: any) => this.messages = res.reverse());
  }

  public postMessage(message: Message): Observable<any> {
    return this.httClient.post("/message", message);
  }
}
