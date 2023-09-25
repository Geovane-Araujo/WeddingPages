import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type HeaderSelectorType = "pages" | "gifts" | "attendance" | "language";


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerSelector = new BehaviorSubject<any>(null);
  public positionWindow: number;
  public showMenuMobile: boolean;

  constructor() {
  }


  public get headerSelector(): Observable<any> {
    return this._headerSelector.asObservable();
  }
  public set headerSelector(headerSelectorType: any) {
    this._headerSelector.next(headerSelectorType);
  }


}
