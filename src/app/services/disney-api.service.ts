import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DisneyModel } from '../models/disney-model';

@Injectable({
  providedIn: 'root'
})
export class DisneyAPIService {

  urlBase: string = 'https://api.disneyapi.dev'
  constructor(private httpClient:HttpClient) { }

  getAllCharacters(){
    return this.httpClient.get<DisneyModel>(`${this.urlBase}/character`);
  }
  getOneCharacter(id:any){
    return this.httpClient.get<DisneyModel>(`${this.urlBase}/character/${id}`);
  }
  getfilterCharacter( name: any ){
    return this.httpClient.get<DisneyModel>(`${this.urlBase}/character`, { params: { name } })
  }
}
