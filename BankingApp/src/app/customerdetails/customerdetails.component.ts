import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customerModel';
import { CustomersService } from '../customers.service';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  customer : Customer;
  result : Customer[];
  transacting :boolean = false;
  sanitizer : DomSanitizer;
  defaulurl : any;
  host_url = "https://bankingappbackend.herokuapp.com/profiles/";
  to_email : string ="";
  tem : string;
  ammount : number = 0;

  id : string;
  message : string;

  constructor(private customerS:CustomersService,private route:ActivatedRoute) {

   }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');

      this.customerS.getACustomer(this.id).subscribe((res:Customer)=>{
          console.log(res); 
          this.customer= res[0];
          if(this.customer.imgurl!=null)
          this.defaulurl = this.customer.imgurl;
          console.log(this.customer.imgurl);
          console.log(this.customer);
      });
      this.customerS.getCustomers().subscribe((res)=>{
        this.result = res;

  
        console.log(this.result);
    });
  }

  transact()
  { 
    //alessrt(this.tem); 
    console.log(this.id,this.to_email,this.ammount);
    this.customerS.postTransaction(this.id,this.to_email,this.ammount).subscribe(data=>{
      this.message = data.message;
      console.log(this.message);
     
      this.transacting=false;
      this.ngOnInit();
    });
  }
  transactTo()
  {
    this.transacting = !this.transacting;
  }

}
