import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: []
})
export class VerPaisComponent implements OnInit {
  /* EL SIGNO DE EXCLAMACIÓN DICE: TYPESCRIPT, ESTA PROPIEDAD PUEDE SER NULA */
  pais!: Country;
  tipoBusqueda: string = 'alpha';

  constructor(
    private activeRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activeRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.buscarPais(id, this.tipoBusqueda)),
        tap(console.log) 
        /* tap: dispara un efecto secundario, recibe el producto del observable anterior
        y en este caso lo imprime en consola */
      )
      .subscribe(pais => {
        this.pais = pais;
      });

    /* this.activeRoute.params
      .subscribe(({id}) => {
        console.log(id)

        this.paisService.getPaisPorAlpha(id)
        .subscribe(pais => {
          console.log(pais)
        }) 


      })*/
  }

}
