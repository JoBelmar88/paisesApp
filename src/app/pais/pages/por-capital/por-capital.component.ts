import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: []
})
export class PorCapitalComponent {	

  termino: string = ''
  hayError: boolean = false;
  _paisesArray: Country[] = [];
  tipoBusqueda: string = 'capital';  
  @Input() placeholder: string = '';   
  
  constructor(private paisService: PaisService) {}

  buscar(termino: string){
    this.termino = termino;
    this.paisService.buscarPais(this.termino, this.tipoBusqueda)
      .subscribe( (paises) => {
        this.hayError = false;
        this._paisesArray = paises;
      }, (err) => {
        this.hayError = true;
        this._paisesArray = [];
      });

  }

  changePlaceholder(){

  }

}
