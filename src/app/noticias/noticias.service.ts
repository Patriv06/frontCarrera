import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticias } from './noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private baseURL="https://complete-audry-privas06.koyeb.app/ver/noticias";

  private noticias: Noticias[] = [];

  constructor(private httpClient: HttpClient) { }

  obtenerNoticias(): Observable<Noticias[]>{
    return this.httpClient.get<Noticias[]>(`${this.baseURL}`);
  }

}
