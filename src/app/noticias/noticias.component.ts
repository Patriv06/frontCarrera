

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


import { trigger, style, transition, animate, state } from '@angular/animations';
import { NoticiasService } from './noticias.service';
import { Noticias } from './noticias';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  animations: [
    trigger('enterState',[
      state('void',style({
        transform:'translateX(100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(400, style({
          transform:'translateX(0%)',
          opacity:1
        }))
      ])
    ])
  ]
})

export class NoticiasComponent implements OnInit {
   mostrar = true;

  constructor(
    private router: Router,
    private noticiasService: NoticiasService
  ) { }

  ngOnInit(): void {
    this.verNoticias();
  }

  pages = 1;
  noticia: Noticias[] = [];

  public verNoticias(){
    this.noticiasService.obtenerNoticias().subscribe(
      (dato => {
        this.noticia = dato;
        console.log('dato antes de sort', dato);

        //ordenar el array por fechas y mostrar de a 3 en las cards
        //console.log('dato despues de sort', dato.sort((a,b) => b.fechaNoticia.getDate() - a.fechaNoticia.getDate()));

      })
    )
  }

}


