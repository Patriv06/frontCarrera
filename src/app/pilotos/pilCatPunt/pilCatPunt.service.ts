import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PilCatPunt } from './pilCatPunt';

// import { Pilotos } from '../pilotos';
// import { PilotosService } from '../pilotos.service';

@Injectable({
  providedIn: 'root'
})

export class PilCatPuntService{

  private buscaPilURL="https://complete-audry-privas06.koyeb.app/ver/pilCatPuntXPiloto/";
  private baseURL="https://complete-audry-privas06.koyeb.app/ver/pilCatPunt";

  constructor(
    private httpClient: HttpClient){}

  obtenerPilCatPuntxPil(nombrePiloto:string):Observable<PilCatPunt[]>{
    return this.httpClient.get<PilCatPunt[]>(`${this.buscaPilURL}`+ nombrePiloto);
  }

  obtenerPilCatPunt():Observable<PilCatPunt[]>{
    return this.httpClient.get<PilCatPunt[]>(`${this.baseURL}`);
  }

  // obtenerPilotos(): Observable<Pilotos[]>{
  //   return this.httpClient.get<Pilotos[]>(`${this.baseURL}`);
  // }
}
