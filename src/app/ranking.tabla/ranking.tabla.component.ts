import { Component, OnInit } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { PilCatPunt } from '../interfaces/pil-cat-punt';
import { Pilotos } from '../interfaces/pilotos';
import { Ranking } from '../interfaces/ranking';
import { PilotosService } from '../services/pilotos.service';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-ranking.tabla',
  templateUrl: './ranking.tabla.component.html',
  styleUrls: ['./ranking.tabla.component.css']
})
export class RankingTablaComponent implements OnInit {

  public pilCatPunt: PilCatPunt[] = [];

  public pilotos: Pilotos[] = [];

  public nombresPilotos: any = [];

  public piloto = "";

  public nombreFiltrado: any = [];

  constructor(
    private rankingService: RankingService,
    private pilotoService: PilotosService) { }

  ngOnInit(): void {
    this.verPilotos();
  }

  verPilotos(){
    this.pilotoService.obtenerPilotos().subscribe(dato => {
      this.pilotos = dato;
      this.nombresPilotos = this.pilotos.map(nombre => nombre.nombrePiloto);
      //console.log(this.pilotos);
      console.log(this.nombresPilotos);
      this.verPilCatPunt();
    });

  }

  verPilCatPunt(){
    this.nombresPilotos.forEach((piloto: String) => {
      this.rankingService.TraerPilCatPunt(piloto.trim()).subscribe(dato => {
        this.pilCatPunt = this.pilCatPunt.concat(dato);
        console.log("terminé", this.pilCatPunt);
        this.ordenarPilotosParaRanking();
      })
    })
  }

  suma(ns: any) {
    let acumulado = 0;
    for(let i = 0; i < ns.length; i++) {
      acumulado += ns[i];
    }
    return acumulado;
  }

  ordenarPilotosParaRanking() {
    this.pilCatPunt.forEach((piloto) => {
      this.nombreFiltrado.push(piloto.nombrePilotoPilCatPunt);
      console.log(this.nombreFiltrado);
    })
    return this.nombreFiltrado;
  }


  /*iterarPilotos(){
    return this.nombresPilotos.forEach(pilot => {
      pilot.RankingService.TraerPilCatPunt
    });

    }
  }*/
    /*return this.rankingService.TraerPilCatPunt(this.nombresPilotos).subscribe(dato => {
      this.pilCatPunt = dato;
      console.log(this.pilCatPunt);
    })*/
  }
