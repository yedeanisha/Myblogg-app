import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {Form, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CardsComponent } from './components/cards/cards.component';
import { CreateComponent } from './components/create/create.component';
import { BlogdetailsComponent } from './components/blogdetails/blogdetails.component';
import { CreateService } from './components/create/create.service';
import { environment } from 'src/environments/environment';
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
import { ButtermilkComponent } from './components/buttermilk/buttermilk.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    BlogComponent,
    ContactComponent,
    CardsComponent,
    CreateComponent,
    BlogdetailsComponent,
    UpdateComponent,
    AddComponent,
    MexicanComponent,
    MexicandetailComponent,
    ChineseComponent,
    ChinesedetailsComponent,
    IndianComponent,
    IndiandetailsComponent,
  
    MorocanComponent,
    FrenchComponent,
    FrenchdetailsComponent,
    TurkishComponent,
    JaljeeraComponent,
    ButtermilkComponent   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  providers: [CreateService],
  bootstrap: [AppComponent],
  exports:[UpdateComponent,FormsModule]
})
export class AppModule { }
