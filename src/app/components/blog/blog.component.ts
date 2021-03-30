import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-menu',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  constructor(private router: Router) { }
  btnname:string="Follow"

  

onclick(){
  this.router.navigate(["/add"])
}

}
