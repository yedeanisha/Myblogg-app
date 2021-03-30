import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrenchService } from '../frenchdetails/french.service';

@Component({
  selector: 'app-french',
  templateUrl: './french.component.html',
  styleUrls: ['./french.component.css']
})
export class FrenchComponent implements OnInit {

  items: any;
  id:number
  chidetail:any; 
  ide:number;
  //injecting
  constructor(private route: Router, private aroute: ActivatedRoute ,private frenchservice:FrenchService) {   } 
   

  ngOnInit(): void {  
    this.items= this.frenchservice.getDetails()  
    console.log("items")       
    }
  }


