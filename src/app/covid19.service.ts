import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  public daysCount: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public hourCount: BehaviorSubject<string> = new BehaviorSubject<string>("");
  constructor(private http:HttpClient) { }
   async loadInformation () {
    const url = 'https://data.covid19india.org/v4/min/data.min.json';
    return await this.http.get<any>(url).toPromise();
   }
   async loadIndiaData() {
    const url = 'https://data.covid19india.org/v4/min/data.min.json';
    return await this.http.get<any>(url).toPromise();
   }
}
