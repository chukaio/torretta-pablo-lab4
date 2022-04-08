import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { JuegosComponent } from './Componentes/juegos/juegos.component';
import { LoginComponent } from './Componentes/login/login.component';
import { NotFoundComponent } from './Componentes/not-found/not-found.component';
import { QuienSoyComponent } from './Componentes/quien-soy/quien-soy.component';
import { TatetiComponent } from './Componentes/tateti/tateti.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component:HomeComponent},
{ path: 'login', component:LoginComponent},
{ path: 'quienSoy', component:QuienSoyComponent},
{ path: 'juegos', component: JuegosComponent, children:[
  { path: 'tateti', component:TatetiComponent},
  { path: '**', component:NotFoundComponent}
]},
{ path: '**', component:NotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
