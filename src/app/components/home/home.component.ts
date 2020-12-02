import { Component, OnInit } from '@angular/core';

import { MainService } from './../../services/main.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MainService) { }
  matches:any=[];
  india:any=[]
  ngOnInit(): void {

    this.getIndiaSer()
    this.getMatches()
  }
  getMatches(){
    this.service.getALlMatch().subscribe(
      res=>{

           this.matches=res.matches
          }
    )
  }
  getIndiaSer(){
       this.service.getIndia().subscribe(
        match=>{

         this.india=match;

       })
  }

}
