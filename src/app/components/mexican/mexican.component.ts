import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CreateService} from 'src/app/components/create/create.service';
import { mexican} from 'src/app/components/create/create';
import { MexicanService } from '../mexicandetail/mexican.service';

@Component({
  selector: 'app-mexican',
  templateUrl: './mexican.component.html',
  styleUrls: ['./mexican.component.css']
})
export class MexicanComponent implements OnInit {

 
  items: mexican[];
  id:number
  mexidetail:mexican; 
  ide:number;
  //injecting
  constructor(private route: Router, private aroute: ActivatedRoute ,private mexicanservice:MexicanService) {   } 
   

  ngOnInit(): void {
    //let id = +this.aroute.snapshot.paramMap.get("id")  ;  
    this.items = this.mexicanservice.getDetails()     
    this.aroute.paramMap.subscribe((p)=>{
      this.id = +p.get('id')
      this.mexidetail = this.mexicanservice.getDetail(this.id);
      
    })
}
}
