import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Pilotos } from './pilotos';
import { PilotosService } from './pilotos.service';
import { PilCatPunt } from './pilCatPunt/pilCatPunt';

import { firstValueFrom } from 'rxjs';
import { PilCatPuntService } from '../services/pil-cat-punt.service';



@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css'],

})
export class PilotosComponent implements OnInit {


  pcp: PilCatPunt[] = [];
  pcp1: PilCatPunt[] = [];
  pilotito:Pilotos[]=[];
  ind=0;
  nombreBusqueda=" "
  piloto: Pilotos[] = [];
  pilu= {
    idPiloto:0,
    nombrePiloto:'',
    apellidoPiloto:'',
    urlImgPiloto:'',
    puntajeAntPiloto:0,
    puntajeActPiloto:0
 }
 pilParaUrl:Pilotos[]=[{
  idPiloto:1,
  nombrePiloto:" ",
  apellidoPiloto:" ",
  urlImgPiloto:" ",
  puntajeAntPiloto:0,
  puntajeActPiloto:0}]


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
     imagen = " "
  constructor(private pilCPServicio: PilCatPuntService,private pilotoService:PilotosService, public router:Router) {}

  ngOnInit(): void {

    this.traerPilotos();
    this.traerPCPXPos();
  }
  traerPCPXPos(){
    this.pilCPServicio.obtenerPCPXPosact().subscribe((dato:PilCatPunt[])=>
    {this.nombre=dato[0].nombrePilotoPilCatPunt;
      this.pcp1=dato;
      console.log("pcp1:",this.pcp1)
      this.changeCentra(this.nombre)})
  }
  public traerPilotos(){
    this.pilotoService.obtenerPilotos().subscribe(dato =>{
      this.piloto = dato;
    });
  }

  async changeCentra(ss: string){
    console.log(ss)
   await this.traerPilXNom(ss)
    await this.traePCPXPilo(ss)
    this.muestra = true
    const splitString = ss.split(",");
    this.nombre = splitString[0]
    this.apellido = splitString[1]
    this.nombreBusqueda=ss
    console.log("nombre:", this.nombre, "Apellido:", this.apellido)
  }
public async traePCPXPilo(pilot: string){
  console.log("pilot: ", pilot)
  const dato = await firstValueFrom(this.pilCPServicio.obtenerpilCatPuntPorPil(pilot))
    this.pcp = dato

   console.log(this.pcp)
  }

  public async traerPilXNom(nom: string){
   const dato:Pilotos[]= await firstValueFrom(this.pilotoService.obtenerPilotosXnombre(nom));
    this.pilParaUrl= dato
    this.imagen=this.pilParaUrl[0].urlImgPiloto

    console.log("Piloto URL: ", this.pilParaUrl[0].urlImgPiloto, "URL: ")
  }

  mostrarNoticias(){
    this.mostrar = true;
    console.log('esto es mostrar', this.mostrar);
  }

  cerrar(){
    this.mostrar = false;
    console.log('esto es cerrar desde noticias', this.mostrar);
  }

  anterior(){
    this.muestra = false
     let index = this.pcp1.findIndex(x => x.nombrePilotoPilCatPunt === this.nombreBusqueda && x.idCategoriaPilCatPunt === "Total");
    console.log ("index nterior:", index)
    if(index>0){
      index=index-18
     this.nombre= this.pcp1[index].nombrePilotoPilCatPunt
     console.log("estoy en anterior", this.nombre, index)
     this.changeCentra(this.nombre) }
    }


  siguiente(){
   this.muestra = false
    let index = this.pcp1.findIndex(x => x.nombrePilotoPilCatPunt === this.nombreBusqueda && x.idCategoriaPilCatPunt === "Total");
    console.log ("index siguiente:", index)

   if(this.ind<this.pcp1.length-17){
      index=index+1
     this.nombre= this.pcp1[index].nombrePilotoPilCatPunt
      console.log("estoy en siguiente", this.nombre, index)
     this.changeCentra(this.nombre)
   }
  }

}

