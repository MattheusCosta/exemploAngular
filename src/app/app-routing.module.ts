import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesSomar } from './somar'
import { RoutesSubtrair } from './subtrair';

export const rotas = [
  { 
    path: 'index', 
    pathMatch: 'full', 
    redirectTo: 'localhost:4200' 
  },...RoutesSomar,...RoutesSubtrair
]

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }