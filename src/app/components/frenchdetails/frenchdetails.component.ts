import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrenchService } from './french.service';

@Component({
  selector: 'app-frenchdetails',
  templateUrl: './frenchdetails.component.html',
  styleUrls: ['./frenchdetails.component.css']
})
export class FrenchdetailsComponent implements OnInit {

  idetail:any;
  id:number;

  constructor(private route: Router, private aroute: ActivatedRoute ,private frenchservice:FrenchService) {   } 
   

  ngOnInit(): void {
    //let id = +this.aroute.snapshot.paramMap.get("id")  ;       
    this.aroute.paramMap.subscribe((p)=>{
      this.id = +p.get('id')
      this.idetail = this.frenchservice.getDetail(this.id);
      
    })

}
}
