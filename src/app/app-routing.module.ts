import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesSomar } from './somar'

export const rotas = [
  { 
    path: 'index', 
    pathMatch: 'full', 
    redirectTo: 'localhost:4200' 
  },...RoutesSomar
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