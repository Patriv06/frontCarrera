

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorias } from './categorias';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias-tablas',
  templateUrl: './categorias-tablas.component.html',
  styleUrls: ['./categorias-tablas.component.css']
})
export class CategoriasTablasComponent implements OnInit {

  pages: number = 1;
  categoria: Categorias[] = []
  mostrar = false
  constructor(
    private categoriasService:CategoriasService,
    private router: Router) { }

  ngOnInit(): void {
    this.traerCategorias();
  }

  public traerCategorias(){
    this.categoriasService.obtenerCategorias().subscribe(dato =>{
      this.categoria = dato});
      console.log('este es el dato de categorias', this.categoria);
  }
  mostrarNoticias(){
    this.mostrar = true;
    console.log('esto es mostrar', this.mostrar);
  }

  cerrar(){
    this.mostrar = false;
    console.log('esto es cerrar desde noticias', this.mostrar);
  }

}


