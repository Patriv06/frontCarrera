
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Categorias } from '../categorias-tablas/categorias';
import { PilCatPunt } from '../pilotos/pilCatPunt/pilCatPunt';
import { PilotosService } from '../pilotos/pilotos.service';
import { CategoriasService } from '../services/categorias.service';
import { PilCatPuntService } from '../services/pil-cat-punt.service';

@Component({
  selector: 'app-ranking1',
  templateUrl: './ranking1.component.html',
  styleUrls: ['./ranking1.component.css']
})
export class Ranking1Component implements OnInit {
  categ: Categorias[] = [];
  pilotoCatPun!: PilCatPunt[];

  nombre1=" ";
  numero=0;
  numero2=0;
  posAntPCP=0
  pages: number = 1;
  mostrar=false

  constructor( private pilotServicio: PilotosService,
    private pilCPServicio: PilCatPuntService,
    private categoriaServicio: CategoriasService) { }

  async ngOnInit(): Promise<void> {
    await this.traerCategorias();
    await this.traerPilCatPunt();
  //  this.cargaTabla();

  }

  public async traerCategorias() {
    const dato = await lastValueFrom(
      this.categoriaServicio.obtenerCategorias()
    );
    this.categ = dato;
    console.log('Categorías:', this.categ);
  }

  public async traerPilCatPunt(){
   const dato = await lastValueFrom(
    this.pilCPServicio.obtenerPCPXPosact()
   );
   this.pilotoCatPun = dato
   console.log ("pilcatpunt: ", this.pilotoCatPun)

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
