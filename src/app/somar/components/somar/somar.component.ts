import { Component, OnInit } from '@angular/core';
import { SomarService } from '../../services';

@Component({
  selector: 'app-somar',
  templateUrl: './somar.component.html',
  styleUrls: ['./somar.component.css']
})
export class SomarComponent implements OnInit {

  constructor(private somar: SomarService) { }
  private _valor:number;
  private _lanche:number;
  private _bebida:number;
  private _doce:number;

  ngOnInit() {
    this._valor = 0;
    this._lanche = 0;
    this._bebida = 0;
    this._doce = 0;
  }

  calcula(valorRecebido:number, tipo:string){
    this._valor = this.somar.somar(this._valor,valorRecebido);
    if(tipo == "lanche"){
      this._lanche++;
    }else if(tipo == "bebida"){
      this._bebida++;
    }else if(tipo == "doce"){
      this._doce++;
    }
  }

  get pegarValor(){
    return this._valor;
  }
  get pegarQtdLanche(){
    return this._lanche;
  }
  get pegarQtdBebida(){
    return this._bebida;
  }
  get pegarQtdDoce(){
    return this._doce;
  }

}
