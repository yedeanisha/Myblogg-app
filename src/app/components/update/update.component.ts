import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Route } from "@angular/router";
import {CreateService} from 'src/app/components/create/create.service';
import { recipe} from 'src/app/components/create/create';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  title='update'
  detail:recipe;
  id:number;
  uid:number;
  constructor(private router: Router, private aroute: ActivatedRoute ,private createservice:CreateService) { }
  ngOnInit(): void {
         let id = +this.aroute.snapshot.paramMap.get("id")  ;      
         this.detail = this.createservice.getDetail(id);
  }
  onSave(userForm:NgForm) {
    this.createservice.update(this.id, this.detail);
    console.log(this.detail)
    this.router.navigate(['/create']);
  }

}
