import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomarService {

  constructor() { }

  somar(valorUm: number, valorDois:number):number{
    return valorUm + valorDois;
  }
}
