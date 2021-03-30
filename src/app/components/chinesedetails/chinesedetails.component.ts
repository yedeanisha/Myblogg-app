import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { ChineseseviceService } from './chinesesevice.service';

@Component({
  selector: 'app-chinesedetails',
  templateUrl: './chinesedetails.component.html',
  styleUrls: ['./chinesedetails.component.css']
})
export class ChinesedetailsComponent implements OnInit {

  chidetail:any;
  id:number;

  constructor(private route: Router, private aroute: ActivatedRoute ,private chineseservice:ChineseseviceService) {   } 
   

  ngOnInit(): void {
    //let id = +this.aroute.snapshot.paramMap.get("id")  ;       
    this.aroute.paramMap.subscribe((p)=>{
      this.id = +p.get('id')
      this.chidetail = this.chineseservice.getDetail(this.id);
      
    })
}
}