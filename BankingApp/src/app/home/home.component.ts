import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import {Customer}  from '../models/customerModel'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result : Customer[];

  constructor(private cutomerS : CustomersService) {

   }

  ngOnInit(): void {
  }

  

}
