import { Component, OnInit } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Categorias } from '../categorias-tablas/categorias';
import { PilCatPunt } from '../pilotos/pilCatPunt/pilCatPunt';
import { CategoriasService } from '../services/categorias.service';
import { PilCatPuntService } from '../services/pil-cat-punt.service';

@Component({
  selector: 'app-ranking-xcat',
  templateUrl: './ranking-xcat.component.html',
  styleUrls: ['./ranking-xcat.component.css']
})
export class RankingXCatComponent implements OnInit {
  categ: Categorias[] = [];
  pilotoCatPun!: PilCatPunt[];
  seleccionado:Categorias=new Categorias()
  pcp: PilCatPunt[] = [];
  pages: number = 1;
  id:number=1
  mostrar=false
  constructor( private pilCPServicio: PilCatPuntService,
    private categoriaServicio: CategoriasService) { }

  async ngOnInit(): Promise<void> {
     await this.traerCategorias();

  }

  public async traerCategorias() {
    const dato = await lastValueFrom(
      this.categoriaServicio.obtenerCategorias()
    );
    this.categ = dato;
    console.log('Categorías:', this.categ);
  }
  changeCentra(ss: any){
    console.log(ss)
    this.traePCPXCateg(ss)

  }
public traePCPXCateg(categoria: string){
    this.pilCPServicio.obtenerpilCatPuntPorCat(categoria).subscribe(dato =>{this.pcp = dato});console.log(this.pcp)
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


