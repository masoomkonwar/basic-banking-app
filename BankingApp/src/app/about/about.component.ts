import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  result : any;
  constructor(private cutomerS : CustomersService  ,private router:Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.cutomerS.getTransactions().subscribe((res)=>{
        this.result = res;
        console.log(this.result);
    });
  }

}
