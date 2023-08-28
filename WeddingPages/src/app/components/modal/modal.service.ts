import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public readonly visible = new BehaviorSubject<any>("");

  constructor() { }
}
