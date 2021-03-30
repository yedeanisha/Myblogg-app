import { Component, OnInit } from '@angular/core';
import { recipe } from './create';
import {CreateService} from './create.service';
import { Router,ActivatedRoute,Route} from '@angular/router'; 
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit { 
  items: recipe[];
  id:number
  detail:recipe; 
  ide:number;
  display:boolean=false;
  //injecting
  constructor(private router: Router, private aroute: ActivatedRoute,private createservice:CreateService){}  
  //intializing
  
  ngOnInit(): void {
    this.items = this.createservice.getDetails()
    //this.createservice.getDetailsapi().subscribe(
     // items => this.items = items
    
   // ) 
   
   
   let id = +this.aroute.snapshot.paramMap.get('id');
  this.detail = this.createservice.getDetail(id);
   }  
    
   //this.aroute.paramMap.subscribe((p)=>{      
     //this.ide = +p.get('id')
    // this.createservice.getDetailsByid(this.ide).subscribe(
      // detail=>this.detail=detail
     //);

       
    //})
  
 

//deleting 
  onDelete(id: number) {
      window.confirm("Are you  sure you want to delete" );
      this.createservice.delete(id);   
    
  }   
 

 
 


}