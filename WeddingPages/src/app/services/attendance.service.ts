import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Attendance {
  id?: string,
  name: string,
  confirm: boolean,
  phone: string,
  email: string,
  quantityCompanion: number,
  companion: string[]
}

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private readonly httClient: HttpClient) { }

  public postAttendance(attendance: Attendance): Observable<any> {
    return this.httClient.post("/attendance", attendance);
  }
}
