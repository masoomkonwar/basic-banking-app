import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';


const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:'/home'},
  {path:'home',component:HomeComponent},
  {path:'customers',component:CustomersComponent},
  {path:'customers/:id',component:CustomerdetailsComponent},
  {path:'transactions',component:AboutComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
