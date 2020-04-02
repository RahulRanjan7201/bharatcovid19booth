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
    const url = 'https://api.covid19india.org/data.json';
    return await this.http.get<any>(url).toPromise();
   }
   async loadIndiaData() {
    const url = 'http://covid-rest.herokuapp.com/india';
    return await this.http.get<any>(url).toPromise();
   }
}
