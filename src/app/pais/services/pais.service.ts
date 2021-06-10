import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { City } from '../interfaces/capital.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = "https://restcountries.eu/rest/v2"

  get httpParams (){
    return new HttpParams()
    .set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<City[]> {
    const url = `${this._apiUrl}/capital/${termino}`;

    return this.http.get<City[]>(url, {params: this.httpParams});
  }

  getPaisByCode(id: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }

  getPaisByRegion(region: string): Observable<Country[]> {
    const url = `${this._apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
