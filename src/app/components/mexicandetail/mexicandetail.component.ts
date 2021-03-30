import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CreateService} from 'src/app/components/create/create.service';
import { mexican} from 'src/app/components/create/create';
import {MexicanService} from './mexican.service';

@Component({
  selector: 'app-mexicandetail',
  templateUrl: './mexicandetail.component.html',
  styleUrls: ['./mexicandetail.component.css']
})
export class MexicandetailComponent implements OnInit {

  mexidetail:mexican;
  id:number;

  constructor(private route: Router, private aroute: ActivatedRoute ,private mexicanservice:MexicanService) {   } 
   

  ngOnInit(): void {
    //let id = +this.aroute.snapshot.paramMap.get("id")  ;       
    this.aroute.paramMap.subscribe((p)=>{
      this.id = +p.get('id')
      this.mexidetail = this.mexicanservice.getDetail(this.id);
      
    })
    
  

  }
  }
    
  