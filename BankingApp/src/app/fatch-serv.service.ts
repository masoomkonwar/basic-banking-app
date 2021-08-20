import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FatchServService {

  url = "http://127.0.0.1/api/customers";

  constructor(private http : HttpClient) { 


  }

  public getCustomers()
  {
    return this.http.get(this.url);
  }
}
