import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in//api/users";

  constructor(private http: HttpClient) { 


  }

  public listaUsuarios(pagina: Number){
    return this.http.get(`${this.url}?page=${pagina}`);//crase para completar a url com dados inseridos pelas decisões do usuário e que são da URL padrão
  }

  public usuario(numero: Number){
    return this.http.get(`${this.url}/${numero}`);
  }
}
