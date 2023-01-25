import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
mostrar=false
  constructor() { }

  ngOnInit(): void {
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
