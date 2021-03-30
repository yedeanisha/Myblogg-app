
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IndianservicesService } from '../indiandetails/indianservices.service';

@Component({
  selector: 'app-indian',
  templateUrl: './indian.component.html',
  styleUrls: ['./indian.component.css']
})
export class IndianComponent implements OnInit {

  items: any;
  id:number
  chidetail:any; 
  ide:number;
  //injecting
  constructor(private route: Router, private aroute: ActivatedRoute ,private indianservice:IndianservicesService) {   } 
   

  ngOnInit(): void {  
    this.items= this.indianservice.getDetails()  
    console.log("items")       
    }
  }
