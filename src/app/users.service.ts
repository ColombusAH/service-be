import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  async fetchCharacters() {
    const charactersRes = await lastValueFrom(this.http.get("https://rickandmortyapi.com/api/character")) as any;
    console.log(charactersRes);
    return charactersRes.results;
  }
}
