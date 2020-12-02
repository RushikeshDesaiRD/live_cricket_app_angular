import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from './../../services/main.service';

@Component({
  selector: 'app-plyer',
  templateUrl: './plyer.component.html',
  styleUrls: ['./plyer.component.css']
})
export class PlyerComponent implements OnInit {
  playerInfo:any[]=[]

  constructor(private route:ActivatedRoute, private service:MainService) { }

  ngOnInit(): void {

    this.service.searchPlayerById(this.route.snapshot.params.id).subscribe(
      player=>{
          console.log(player);
          this.playerInfo=player
      }
    )
  }


}
