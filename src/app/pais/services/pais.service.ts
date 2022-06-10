import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiKey: string = '8470000bef921efd8cc7630d431a9dd3';
  private _servicioUrl: string = 'http://api.countrylayer.com/v2';

  /* 'http://api.countrylayer.com/v2/name/ecuador?access_key='; */

  constructor(private http: HttpClient) { }


  buscarPaisPorNombre(termino: string): Observable<Country[]>{
    const params = new HttpParams()
      .set('access_key', this._apiKey);

      return this.http.get<Country[]>(`${this._servicioUrl}/name/${termino}?`, {params});
        /* .pipe(
          catchError( err => of(['Se envía error controlado']))
        ); */
  }
}
