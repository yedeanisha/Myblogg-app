import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Route } from "@angular/router";
import {CreateService} from 'src/app/components/create/create.service';
import { recipe} from 'src/app/components/create/create';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {  
  title='blog'
  detail:recipe;
  id:number;
  constructor(private route: Router, private aroute: ActivatedRoute ,private createservice:CreateService) {   }
     
   

  ngOnInit(): void {
     //let id = +this.aroute.snapshot.paramMap.get("id")  ;       
       this.aroute.paramMap.subscribe((p)=>{
         this.id = +p.get('id')
         this.detail = this.createservice.getDetail(this.id);
         
       })
      
       
       
     //this.detail = this.createservice.getDetail(id);
    // this.createservice.getDetailsByid(id).subscribe(
      // detail=>this.detail= detail
     //)
   
  

    }
    onedit(){
      this.route.navigate(["/blogdetails",this.id]);
    }

  }
