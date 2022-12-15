import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { PilCatPuntService } from './pilCatPunt.service';
import { PilCatPunt } from './pilCatPunt';
import { PilotosService } from '../pilotos.service';
import { Pilotos } from '../pilotos';

@Component({
  selector: 'app-pilCatPunt',
  templateUrl: './pilCatPunt.component.html',
  styleUrls: ['./pilCatPunt.component.css']
})

export class PilCatPuntComponent implements OnInit {

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  @Input() datoNombre: any;

  nombre: string = '';
  puntos: PilCatPunt[] = [
    {
     idPilCatPunt:0,
     nombrePilotoPilCatPunt:'',
     idCategoriaPilCatPunt:'',
     puntosAntPilCantPunt:0,
     puntosActPilCantPunt:0,
    }
  ]

  piloto: Pilotos[] = [
    {
      idPiloto:0,
      nombrePiloto:'',
      apellidoPiloto:'',
      urlImgPiloto:'',
      puntajeAntPiloto:0,
      puntajeActPiloto:0
    }
  ]

  ngOnInit(): void {
    var nombre = this.datoNombre.nombrePiloto.trim();
    this.traerPilCatPunt(nombre);
  };

    traerPilCatPunt(nombrePiloto: string){
      this.pilCatPuntService.obtenerPilCatPuntxPil(nombrePiloto)
      .subscribe(
        (dato: PilCatPunt[]) => {this.puntos = dato}
      )
    }

  constructor(
    private router: Router,
    private pilCatPuntService: PilCatPuntService,
    private pilotoService: PilotosService
  ){};

}
