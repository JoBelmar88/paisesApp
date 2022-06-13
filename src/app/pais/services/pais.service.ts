import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //private _apiKey: string = '8470000bef921efd8cc7630d431a9dd3';
  private _apiKey: string = 'bb36c701fe569ff68b6a034a110e0cd8';
  private _servicioUrl: string = 'http://api.countrylayer.com/v2';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string, tipoBusqueda: string): Observable<Country[]>{
    const params = new HttpParams()
      .set('access_key', this._apiKey);
    return this.http.get<Country[]>(`${this._servicioUrl}/${tipoBusqueda}/${termino}?`, {params});
        /* .pipe(
          catchError( err => of(['Se envía error controlado']))
        ); */
  }
}
