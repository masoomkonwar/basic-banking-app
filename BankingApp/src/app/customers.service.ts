import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from './models/customerModel'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url = "https://bankingappbackend.herokuapp.com/api/";
  url2 = "http://127.0.0.1:5055/api/";

  constructor(private http : HttpClient) { 


  }

  public getCustomers()
  {
    return this.http.get<Customer[]>(this.url+'customers/');
  }
  public getTransactions()
  {
    return this.http.get<any>(this.url+'givetransactions/');
  }
  public getACustomer(email)
  {
    return this.http.get<Customer>(this.url+'customers/'+email);
  }
  public postTransaction(email1,email2,value){
    return this.http.post<any>(this.url+"transactions/",{sender : email1,receiver : email2, ammount :value}); 

  }
}
