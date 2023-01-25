import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Categorias } from '../categorias-tablas/categorias';
import { PilCatPunt } from '../pilotos/pilCatPunt/pilCatPunt';
import { PilotosService } from '../pilotos/pilotos.service';
import { CategoriasService } from '../services/categorias.service';
import { PilCatPuntService } from '../services/pil-cat-punt.service';



@Component({
  selector: 'app-ranking-xtop',
  templateUrl: './ranking-xtop.component.html',
  styleUrls: ['./ranking-xtop.component.css']
})
export class RankingXTopComponent implements OnInit {

  categ: Categorias[] = [];
  pilotoCatPun!: PilCatPunt[];

  Opciones= [
    { num: 5, name: "TOP 5" },
    { num: 10, name: "TOP 10" },
    { num: 15, name: "TOP 15" },
    { num: 20, name: "TOP 20" },
    { num: 25, name: "TOP 25" }
  ];
  seleccionado:any
  numero=18;
  numero2=0;
  posAntPCP=0
  pages: number = 1;

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
  changeCentra(ss: number){
    console.log(ss)
    this.numero = ss * 18



  }
}
