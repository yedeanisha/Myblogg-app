import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mexican } from 'src/app/components/create/create';
import { ChineseseviceService } from '../chinesedetails/chinesesevice.service';
@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.css']
})
export class ChineseComponent implements OnInit {

  items: any;
  id:number
  chidetail:any; 
  ide:number;
  //injecting
  constructor(private route: Router, private aroute: ActivatedRoute ,private chineseservice:ChineseseviceService) {   } 
   

  ngOnInit(): void {  
    this.items= this.chineseservice.getDetails()  
    console.log("items")       
    }
  }
