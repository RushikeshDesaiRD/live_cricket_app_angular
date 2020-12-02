import { Component, OnInit } from '@angular/core';
import { MainService } from './../../services/main.service';

@Component({
  selector: 'app-plyers',
  templateUrl: './plyers.component.html',
  styleUrls: ['./plyers.component.css']
})
export class PlyersComponent implements OnInit {
  playerName = '';
  constructor(private service:MainService) { }


  searchResult:[]=[]
  ngOnInit(): void {
  }

  method(playerName){
   this.service.searchPlayers(playerName).subscribe(players =>{

        this.searchResult=players.data;
     })
  }

}
