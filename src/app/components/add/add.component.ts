import { Component, OnInit } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';
import { CreateService } from '../create/create.service';
import { ActivatedRoute, Router,Route } from "@angular/router";
import { recipe} from 'src/app/components/create/create';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  exportAs: 'NgForm'
})
export class AddComponent implements OnInit {

  title='Addelement'
  //dependency injection
  detail:recipe
  a:any
  id:number;
  uid:number;
  constructor(private router: Router, private aroute: ActivatedRoute ,private createservice:CreateService) { }
  ngOnInit(): void {
         let id = +this.aroute.snapshot.paramMap.get("id")  ;      
         this.detail = this.createservice.getDetail(id);
  }
  onSave(userForm:NgForm) {
    this.a=userForm.value
    console.log(this.a)
    this.createservice.add(this.a)    
    this.router.navigate(['/create']);
  }
  
}



