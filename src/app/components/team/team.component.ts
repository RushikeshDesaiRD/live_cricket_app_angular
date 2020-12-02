import { Component, OnInit } from '@angular/core';
import { MainService } from './../../services/main.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  AllMatches:any[]=[]
  matches:any[]=[]
  teamName=''
  constructor(private service:MainService) { }

  ngOnInit(): void {
     this.service.getALlMatch().subscribe(match => {
       this.AllMatches=match.matches;
     })
  }

  getTeam(val){

    this.AllMatches.filter(item =>
     {

       if(item['team-1'] === val|| item['team-2'] === val){
         this.matches.push(item);
       }
     }
     )
     console.log(this.matches);
   }
}
