import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  apiKey="4hSNM9uRwfZGK0TZiwGtFrxPGBf2"
 //https://cricapi.com/api/cricketScore?unique_id=1223957&apikey=4hSNM9uRwfZGK0TZiwGtFrxPGBf2
 //http://cricapi.com/api/cricketScore
 //https://cricapi.com/api/playerFinder?name=rohit&apikey=4hSNM9uRwfZGK0TZiwGtFrxPGBf2
 //
  constructor(private http:HttpClient) { }

  getIndia(): Observable<any> {
    return this.http.get<any>("https://cricapi.com/api/cricketScore?unique_id=1223957&apikey=4hSNM9uRwfZGK0TZiwGtFrxPGBf2")
  }
  getALlMatch(): Observable<any>{
    let url=`https://cricapi.com/api/matches?apikey=${this.apiKey}`;
    return this.http.get<any>(url)
  }
  searchPlayers(playerName): Observable<any>{
    let url=`https://cricapi.com/api/playerFinder?name=${playerName}&apikey=4hSNM9uRwfZGK0TZiwGtFrxPGBf2`;
    return this.http.get<any>(url);
  }
  searchPlayerById(id){
    let url=`https://cricapi.com/api/playerStats?pid=${id}&apikey=4hSNM9uRwfZGK0TZiwGtFrxPGBf2`;
    return this.http.get<any>(url);
  }
}
