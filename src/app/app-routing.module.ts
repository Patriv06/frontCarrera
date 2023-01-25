import { RankingXTopComponent } from './ranking-xtop/ranking-xtop.component';
import { RankingXCatComponent } from './ranking-xcat/ranking-xcat.component';
import { Ranking1Component } from './ranking1/ranking1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotosComponent } from './pilotos/pilotos.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { RankingSponsorsComponent } from './ranking.sponsors/ranking.sponsors.component';
import { CategoriasSponsorsComponent } from './categorias.sponsors/categorias.sponsors.component';
import { CategoriasTablasComponent } from './categorias-tablas/categorias-tablas.component';
import { PilCatPuntComponent } from './pilotos/pilCatPunt/pilCatPunt.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'ranking', component:RankingSponsorsComponent},
  {path:'ranking1', component:Ranking1Component},
  {path:'rankingxcat', component:RankingXCatComponent},
  {path:'rankingxtop', component:RankingXTopComponent},
  {path:'pilotos', component:PilotosComponent},
  {path:'menu', component:MenuComponent},
  {path:'categorias', component:CategoriasSponsorsComponent},
  {path:'categorias-tabla', component:CategoriasTablasComponent},
  {path:'noticias', component:NoticiasComponent},
  {path: 'pilcatpunt', component:PilCatPuntComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
 // {path:'#1', redirectTo:'pilotos', component:PilotosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
