import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PilCatPunt } from '../interfaces/pil-cat-punt';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  public URL_BASE = "https://complete-audry-privas06.koyeb.app/ver/pilCatPuntXPiloto/";


  constructor(private http: HttpClient) { }

  TraerPilCatPunt(nombrePiloto:String):Observable<PilCatPunt[]>{
    return this.http.get<PilCatPunt[]>(`${this.URL_BASE}` + nombrePiloto);
  }

}
