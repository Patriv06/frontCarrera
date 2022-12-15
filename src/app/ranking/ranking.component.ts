import { Categorias } from '../categorias-tablas/categorias';
import { PilCatPunt } from './../pilotos/pilCatPunt/pilCatPunt';

import { CategoriasService } from './../services/categorias.service';
import { PilCatPuntService } from './../services/pil-cat-punt.service';

import { Component, OnInit } from '@angular/core';
import { Pilotos } from '../pilotos/pilotos';
import { PilotosService } from '../pilotos/pilotos.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  // ******************************************************************************************************************
  pilot: Pilotos[] = [];
  categ: Categorias[] = [];
  catego: Array<string> = [];
  pcpNombrePiloto: Array<string> = [];
  pcpNombreCategoria: Array<string> = [];
  pcpPunAntCateg: Array<number> = [];
  pcpPunActCateg: Array<number> = [];
  J = 0;
  pilotoCatPun!: PilCatPunt[];
  ver=true
  ver1=false
  ver2=false
  indice: number = 0;
  indice2: number = 0;
  indice3: number = 0;
  //********************************************************************************************************* */
  constructor(
    private pilotServicio: PilotosService,
    private pilCPServicio: PilCatPuntService,
    private categoriaServicio: CategoriasService
  ) {}

  async ngOnInit(): Promise<void> {
   // console.log('primer console.log');
    await this.traerPilotos();
    await this.traerCategorias();
   // console.log('segundo console.log');
    this.cargaTablasCategoriaspilCatPunt();
  }
  public async traerPilotos() {
    const dato = await lastValueFrom(this.pilotServicio.obtenerPilotos());
    this.pilot = dato;
   // console.log('Pilotos:', this.pilot);
  }

  public async traerCategorias() {
    const dato = await lastValueFrom(
      this.categoriaServicio.obtenerCategorias()
    );
    this.categ = dato;
    console.log('Categorías:', this.categ);
  }

  public async traerPilCatPunt(pil: String, cat: String) {
    var datoPil: PilCatPunt[] = await firstValueFrom(
      this.pilCPServicio.obtenerpilCatPuntPorPilyCat(pil, cat)
    );
   // console.log(datoPil);
    if (datoPil != undefined) {
      this.pilotoCatPun = datoPil;
    }
  //  console.log('Estoy en Pilcatpunt');
  }

  public async cargaTablasCategoriaspilCatPunt() {
 //   console.log('entré en cargaTablas', this.categ);

    for (let pil of this.pilot) {
   //   console.log('Piloto', pil.nombrePiloto);

      for (let cat of this.categ) {
   //      console.log(cat.idCategoria);
      this.catego[this.indice] = cat.idCategoria;

        this.pcpNombreCategoria[this.indice] = cat.idCategoria;
    //    console.log(this.catego[this.indice],"|", this.pcpNombreCategoria[this.indice]);
        this.pcpNombrePiloto[this.indice] = pil.nombrePiloto;
        this.pcpPunAntCateg[this.indice] = 0;
        this.pcpPunActCateg[this.indice] = 0;

        await this.traerPilCatPunt(pil.nombrePiloto, cat.idCategoria);
        if (this.pilotoCatPun[0] != undefined) {

          this.pcpPunActCateg[this.indice] =
            this.pilotoCatPun[0].puntosActPilCantPunt;
          this.pcpPunAntCateg[this.indice] =
            this.pilotoCatPun[0].puntosAntPilCantPunt;
        }
        //  console.log("PilCatPunt:", this.pilCatPun[this.indice])
   //     console.log(
   //       'Piloto Cargado: ',
   //       this.pcpNombreCategoria[this.indice],
   //       ' |',
    //      this.pcpNombrePiloto[this.indice],
    //      ' |',
     //     this.pcpPunActCateg[this.indice],
    //      ' |',
   //       this.pcpPunAntCateg[this.indice]
    //    );
        this.indice = this.indice + 1;
      }
    }

  //  console.log('salí de carga tablas');
    this.mustraTitulos()
    this.muestraPilotosPuntos();
  }
  public mustraTitulos(){
    this.ver=false
    this.ver1=true

    let ff = "Piloto |"
    for (let cat of this.categ){
       ff = ff + cat.idCategoria + "|"
       this.indice2 = this.indice2 + 1

    }
    const div = document.createElement("div");  // <div></div>
    div.textContent = ff


const app = document.querySelector("#app"); // <div id="app">App</div>


app?.insertAdjacentElement("beforebegin", div);
  }
  public muestraPilotosPuntos() {
    this.ver1 = false

    for (let i = 0; i < this.pcpNombrePiloto.length; i++) {

      let ff = this.pcpNombrePiloto[this.J]+"-";
      var nombre = this.pcpNombrePiloto[this.J];
      do {
        if (this.pcpPunActCateg[this.J] == 0){
        ff =
          ff +"___"+

          this.pcpPunActCateg[this.J] +
          ' | ';}
          else{ff =
            ff +

            this.pcpPunActCateg[this.J] +
            ' | ';}
        this.J++;
        this.indice2 = this.indice2 + 1
      } while (nombre == this.pcpNombrePiloto[this.J]);
   //   console.log(ff);
   //   console.log('I:', i);
   //   console.log('Largo:', this.pcpNombrePiloto.length);
      const div = document.createElement("div");  // <div></div>
      div.textContent = ff


  const app = document.querySelector("#app"); // <div id="app">App</div>


  app?.insertAdjacentElement("beforebegin", div);

    }
  }
}
