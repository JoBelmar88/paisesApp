import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `    
  ]
})
export class PorRegionComponent {

  termino: string = '';
  regiones: string[] = ['oceania', 'africa', 'americas', 'europe', 'asia'];
  regionActiva: String = '';
  paises: Country[] = [];
  tipoBusqueda: string = 'region';
  hayError: boolean = false;

  constructor(private paisService: PaisService) {}

  activarRegion(region: string){
    if(region === this.regionActiva){return;}
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarPais(region, this.tipoBusqueda)
      .subscribe( paises => this.paises = paises)
  }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva ? 'btn-primary' : 'btn btn-outline-primary');
  }

  buscar(termino: string){
    this.termino = termino;
    this.paisService.buscarPais(this.termino, this.tipoBusqueda)
      .subscribe( (paises) => {
        this.hayError = false;
        this.paises = paises;
        console.log(paises);
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });

  }

}
