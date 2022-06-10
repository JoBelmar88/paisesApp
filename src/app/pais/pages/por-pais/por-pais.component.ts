import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent{

  termino: string = ''
  hayError: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(){
    console.log(this.termino);
    this.paisService.buscarPaisPorNombre(this.termino)
      .subscribe( (paises) => {
        this.hayError = false;
        console.log(paises);
      }, (err) => {
        this.hayError = true;
        console.log('Error');
        console.log(err);
      });

  }

}
