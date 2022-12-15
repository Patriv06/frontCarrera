import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Categorias } from './categorias';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private baseURL="https://back-ranking.herokuapp.com/ver/categorias";

  cat = {
    idCat:1,
    idCategoria:" ",
    nombreCategoria:" ",
    ponderadorCategoria: 0,
    linkCategoria:" ",
  }

  constructor(private httpClient: HttpClient) { }

  obtenerCategorias():Observable<Categorias[]>{
    return this.httpClient.get<Categorias[]>(`${this.baseURL}`);
  }
}
