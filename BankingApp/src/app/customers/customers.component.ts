import { Component, OnInit } from '@angular/core';
import {Customer}  from '../models/customerModel'
import { CustomersService } from '../customers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  result : Customer[];
  constructor(private cutomerS : CustomersService  ,private router:Router,private route :ActivatedRoute) { }
  host_url = "https://bankingappbackend.herokuapp.com/profiles/";
  ngOnInit(): void {
    this.cutomerS.getCustomers().subscribe((res)=>{
        this.result = res;
        console.log(this.result);
    });
  }

  goTocustomer(email)
  {
      this.router.navigate(['customers',email]);
  }

}
