import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PilotosComponent } from './pilotos/pilotos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CategoriasSponsorsComponent } from './categorias.sponsors/categorias.sponsors.component';
import { RankingSponsorsComponent } from './ranking.sponsors/ranking.sponsors.component';
import { RankingTablaComponent } from './ranking.tabla/ranking.tabla.component';
import { CategoriasTablasComponent } from './categorias-tablas/categorias-tablas.component';
import { CategoriasComponent } from './helpers/categorias/categorias.component';
import { PilCatPuntComponent } from './pilotos/pilCatPunt/pilCatPunt.component';
import { FormsModule } from '@angular/forms';
import { RankingComponent } from './ranking/ranking.component';


const router: Routes = [
  {path:'home', component:HomeComponent},
  {path:'ranking', component:RankingComponent},
  {path:'ranking-tabla', component:RankingTablaComponent},
  {path:'pilotos', component:PilotosComponent},
  {path:'categorias', component:CategoriasSponsorsComponent},
  {path:'categorias-tabla', component:CategoriasTablasComponent},
  {path:'noticias', component:NoticiasComponent},
  {path:'menu', component:MenuComponent},
  {path: 'pilCatPunt', component:PilCatPuntComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PilotosComponent,
    NoticiasComponent,
    RankingSponsorsComponent,
    RankingTablaComponent,
    CategoriasTablasComponent,
    CategoriasSponsorsComponent,
    CategoriasComponent,
    PilCatPuntComponent,
    RankingComponent
    ],
  imports: [
    BrowserModule,
    MatSliderModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(router),
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
