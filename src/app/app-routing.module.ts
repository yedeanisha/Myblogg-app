import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { BlogdetailsComponent } from 'src/app/components/blogdetails/blogdetails.component';
import { UpdateComponent } from './components/update/update.component';
import { AddComponent } from './components/add/add.component';
import { MexicanComponent } from './components/mexican/mexican.component';
import { MexicandetailComponent } from './components/mexicandetail/mexicandetail.component';
import { ChineseComponent } from './components/chinese/chinese.component';
import { ChinesedetailsComponent } from './components/chinesedetails/chinesedetails.component';
import { IndianComponent } from './components/indian/indian.component';
import { IndiandetailsComponent } from './components/indiandetails/indiandetails.component';

import { MorocanComponent } from './components/morocan/morocan.component';
import { FrenchComponent } from './components/french/french.component';
import { FrenchdetailsComponent } from './components/frenchdetails/frenchdetails.component';
import { TurkishComponent } from './components/turkish/turkish.component';
import { JaljeeraComponent } from './components/jaljeera/jaljeera.component';





const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"blog" , component:BlogComponent},
  {path:"aboutus", component:AboutusComponent},
  {path: '' , component:HomeComponent},  
  {path: "create" , component:CreateComponent},
  {path :"create/:id" ,  component:BlogdetailsComponent},
  {path:"blogdetails/:id", component:UpdateComponent},
  {path:"blogdetails" , component:BlogdetailsComponent},

  {path:"add" , component:AddComponent},
  
  {path:"mexican" ,component:MexicanComponent},
  {path:"mexican/:id" ,component:MexicandetailComponent},
  {path:"chinese" ,component:ChineseComponent},
  {path:"chinese/:id",component:ChinesedetailsComponent},
  {path:"indian", component:IndianComponent},
  {path:"indian/:id",component:IndiandetailsComponent},
 
  {path:"morocan", component:MorocanComponent},
  {path:"french",component:FrenchComponent},
  {path:"french/:id",component:FrenchdetailsComponent},
  {path:"turkish",component:TurkishComponent},
  {path:"jaljeera",component:JaljeeraComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
