import { Tema } from './../model/Tema';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  constructor(private http: HttpClient) { }

  token = {    
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    }
  }

  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://blogpessoal-devnovais.herokuapp.com/temas', this.token)
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://blogpessoal-devnovais.herokuapp.com/temas/${id}`, this.token)
  }

  getByNomeTema(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://blogpessoal-devnovais.herokuapp.com/temas/nome/${nome}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('https://blogpessoal-devnovais.herokuapp.com/temas', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://blogpessoal-devnovais.herokuapp.com/temas', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete<Tema>(`https://blogpessoal-devnovais.herokuapp.com/temas/${id}`, this.token)
  }
  
}
