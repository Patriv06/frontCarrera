import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pilotos } from './pilotos';
import { PilCatPunt } from './pilCatPunt/pilCatPunt';

@Injectable({
  providedIn: 'root'
})

export class PilotosService {
  private baseURL="https://complete-audry-privas06.koyeb.app/ver/pilotos";
  private buscaPilURL="https://complete-audry-privas06.koyeb.app/ver/pilCatPuntXPiloto/";

  private piloto: Pilotos[] = []
  private puntos: PilCatPunt[] = []

  constructor(private httpClient: HttpClient) { }

  obtenerPilotos(): Observable<Pilotos[]>{
    return this.httpClient.get<Pilotos[]>(`${this.baseURL}`);
  }

  obtenerPilCatPuntxPil(nombrePiloto:string):Observable<PilCatPunt[]>{
    return this.httpClient.get<PilCatPunt[]>(`${this.buscaPilURL}`+ nombrePiloto);
  }

  obtenerPilCatPunt():Observable<PilCatPunt[]>{
    return this.httpClient.get<PilCatPunt[]>(`${this.baseURL}`);
  }
}
