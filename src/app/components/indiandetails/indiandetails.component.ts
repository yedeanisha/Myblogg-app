import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { IndianservicesService } from './indianservices.service';


@Component({
  selector: 'app-indiandetails',
  templateUrl: './indiandetails.component.html',
  styleUrls: ['./indiandetails.component.css']
})
export class IndiandetailsComponent implements OnInit {

  idetail:any;
  id:number;

  constructor(private route: Router, private aroute: ActivatedRoute ,private indianservice:IndianservicesService) {   } 
   

  ngOnInit(): void {
    //let id = +this.aroute.snapshot.paramMap.get("id")  ;       
    this.aroute.paramMap.subscribe((p)=>{
      this.id = +p.get('id')
      this.idetail = this.indianservice.getDetail(this.id);
      
    })
}
}

