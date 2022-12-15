import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { Pilotos } from './pilotos';
import { PilotosService } from './pilotos.service';
import { PilCatPunt } from './pilCatPunt/pilCatPunt';
import { NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css'],

})
export class PilotosComponent implements OnInit {
  Subject: any;

  // @Input() nombre: string ='';
  // @Output() onEnter   : EventEmitter<string> = new EventEmitter();

  searchColumn(value: string): void {
    console.log('value', value);
    this.traerPilCatPunt(value);
  }

  // public page!: number;

  piloto: Pilotos[] = [];
  pilu = {
    idPiloto:0,
    nombrePiloto:'',
    apellidoPiloto:'',
    urlImgPiloto:'',
    puntajeAntPiloto:0,
    puntajeActPiloto:0
 }
  puntos: PilCatPunt[] = [];
  punto = {
      idPilCatPunt:0,
      nombrePilotoPilCatPunt:'',
      idCategoriaPilCatPunt:'',
      puntosAntPilCantPunt:0,
      puntosActPilCantPunt:0,
     }

  constructor(
    private router:Router,
    private pilotoService:PilotosService) {}

  ngOnInit(): void {
    this.Subject.pipe(debounceTime(500))
    .subscribe((search: any) => {
      this.searchColumn(search);
  });
    this.traerPilotos();
  }

  public traerPilotos(){
    this.pilotoService.obtenerPilotos().subscribe(dato =>{
      this.piloto = dato;
      let primerPiloto = this.piloto[0];
      // this.traerPilCatPunt(primerPiloto.nombrePiloto);
    });
  }

  public traerPilCatPunt(nombre: string){

    this.pilotoService.obtenerPilCatPuntxPil(nombre).subscribe(
      (dato: PilCatPunt[]) => {this.puntos = dato;
      console.log('this.puntos', this.puntos);
      this.punto = this.puntos[0];
      }
    )
  }



  // elegir(f: NgForm){
  //   console.log('este es el f.value', f.value.miSelect.nombrePiloto );
    // let datoNombre = {};
    // let datoPuntajeAnterior = {};
    // let datoPuntajeActual = {};
    // datoNombre = this.pilu;
    // datoPuntajeAnterior = this.pilu.puntajeAntPiloto;
    // datoPuntajeActual = this.pilu.puntajeActPiloto;
    // console.log('puntos actuales', datoPuntajeActual);
    // console.log('puntaje anterior', datoPuntajeAnterior);
    // this.ver = true;
    // this.verSelect = false;
  // }

  // reload(){
  //   window.location.reload();
  // }

  // pilotoPrevio(): void{
  //   this.pilotoService.obtenerPilotos().subscribe(dato => {
  //     let datoPiloto = dato.filter(item => item.nombrePiloto == this.pilu.nombrePiloto);
  //     // let getPiloto = datoPiloto.find(item => item.idPiloto == this.pilu.idPiloto);
  //     let index = datoPiloto.findIndex(item => item == this.pilu);
  //     let indexPrevio: number = index != 0 ? index -1 : datoPiloto.length - 1;
  //     // let idPrevio: number = datoPiloto[indexPrevio].idPiloto;
  //     // this.pilu.idPiloto = idPrevio;
  //     console.log(`este es el index = ${index}`, index);
  //     });
  // }
}
