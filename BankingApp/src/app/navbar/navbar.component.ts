import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed = true;
  
  constructor(private router : Router) { }
  
  ngOnInit(): void {
  }
  gotoCustomer()
  {
    this.router.navigate(['customers']);
  }
  gotoHome()
  {
    this.router.navigate(['home']);
  }
  gotoTransactions()
  {
    this.router.navigate(['transactions']);
  }

}
