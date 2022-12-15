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
  cate: Categorias[] = []

  constructor(
    private categServicio:CategoriasService,
    private router: Router) { }

  ngOnInit(): void {
    // this.traerCategorias();
  }

  cat = {
    idCat:1,
    idCategoria:'',
    nombreCategoria:'',
    ponderadorCategoria: 0,
    linkCategoria:''
  }

  // public traerCategorias(){
  //   this.categServicio.obtenerCategorias().subscribe(dato =>{this.cate = dato});
  // }

}
