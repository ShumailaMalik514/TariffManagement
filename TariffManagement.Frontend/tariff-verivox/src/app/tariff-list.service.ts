
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TariffListService {
  
  constructor(private http: HttpClient) { }
  
  rootURL = 'http://localhost:7019/';
  getTariffList(): Observable<any[]> {
    return this.http.get<any[]>(this.rootURL + 'Tariff')
  }
}