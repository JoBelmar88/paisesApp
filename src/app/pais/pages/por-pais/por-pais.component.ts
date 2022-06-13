import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent{

  termino: string = ''  
  hayError: boolean = false;
  _paisesArray: Country[] = [];
  tipoBusqueda: string = 'name';
  
  constructor(private paisService: PaisService) {}

  buscar(termino: string){
    this.termino = termino;
    this.paisService.buscarPais(this.termino, this.tipoBusqueda)
      .subscribe( (paises) => {
        this.hayError = false;
        this._paisesArray = paises;
        console.log(paises);
      }, (err) => {
        this.hayError = true;
        this._paisesArray = [];
      });

  }

}
