import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DisneyModel } from '../models/disney-model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisneyAPIService {
  urlBase: string = 'https://api.disneyapi.dev';
  constructor(private httpClient: HttpClient) {}

  getAllCharacters(page?: number, pageSize?: number) {
    let params = new HttpParams();
    if (page !== undefined && pageSize !== undefined) {
      params = params.set('page', page);
      params = params.set('pageSize', pageSize);
    }
    return this.httpClient.get<DisneyModel>(`${this.urlBase}/character`, {
      params,
    });
  }
  getOneCharacter(id: any) {
    return this.httpClient.get<DisneyModel>(`${this.urlBase}/character/${id}`);
  }
  getfilterCharacter(name: string): Observable<any> {
    return this.httpClient
      .get<any>(`${this.urlBase}/character`, { params: { name } })
      .pipe(map((response) => response.data));
  }
}
