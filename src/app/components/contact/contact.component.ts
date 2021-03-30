import { Component, OnInit } from '@angular/core';
import {Form} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:string="subscribe"
  constructor() { }

  ngOnInit(): void {    
  }
  submit(userform:any){
     console.log("formsubmitted")
     alert("submitted");
     userform.reset();        

  }
  onclick(){
    if (this.name=="subscribe"){
      this.name=  "subscribed"
    }

}
}
