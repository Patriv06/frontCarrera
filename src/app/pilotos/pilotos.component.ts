import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { Pilotos } from './pilotos';
import { PilotosService } from './pilotos.service';
import { PilCatPunt } from './pilCatPunt/pilCatPunt';
import { NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subject, firstValueFrom } from 'rxjs';
import { PilCatPuntService } from '../services/pil-cat-punt.service';



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
  pcp: PilCatPunt[] = [];
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
    posActPCP:0,
    posAntPCP:0,
    nombrePilotoPilCatPunt:'',
      idCategoriaPilCatPunt:'',
      puntosAntPilCantPunt:0,
      puntosActPilCantPunt:0,
     }
     seleccionado:Pilotos=new Pilotos()
     mostrar = false
     muestra = false
     nombre = " "
     apellido = " "

  constructor(private pilCPServicio: PilCatPuntService,private pilotoService:PilotosService) {}

  ngOnInit(): void {
    /* this.Subject.pipe(debounceTime(500))
    .subscribe((search: any) => {
      this.searchColumn(search);
  }); */
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
  async changeCentra(ss: string){
    console.log(ss)
    await this.traePCPXPilo(ss)
    this.muestra = true
    const splitString = ss.split(",");
    this.nombre = splitString[0]
    this.apellido = splitString[1]

  }
public async traePCPXPilo(pilot: string){
  console.log("pilot: ", pilot)
  const dato = await firstValueFrom(this.pilCPServicio.obtenerpilCatPuntPorPil(pilot))
    this.pcp = dato

   console.log(this.pcp)
  }



  mostrarNoticias(){
    this.mostrar = true;
    console.log('esto es mostrar', this.mostrar);
  }

  cerrar(){
    this.mostrar = false;
    console.log('esto es cerrar desde noticias', this.mostrar);
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
