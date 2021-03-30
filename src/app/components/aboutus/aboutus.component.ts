import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  name:string="subscribe"
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    if (this.name=="subscribe"){
      this.name=  "subscribed"
    }
  }   

}
