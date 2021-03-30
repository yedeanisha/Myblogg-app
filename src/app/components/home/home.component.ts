import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
