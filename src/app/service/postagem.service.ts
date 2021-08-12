import { Postagem } from './../model/Postagem';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this.token = { headers: new HttpHeaders().set('Authorization', environment.token)}
  }

  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`https://blogpessoal-devnovais.herokuapp.com/postagens`, this.token)
  }

  getById(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`https://blogpessoal-devnovais.herokuapp.com/postagens/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://blogpessoal-devnovais.herokuapp.com/postagens/titulo/${titulo}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>    {
    return this.http.post<Postagem>('https://blogpessoal-devnovais.herokuapp.com/postagens', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://blogpessoal-devnovais.herokuapp.com/postagens', postagem, this.token)
  }

  deletePostagem(id:number){
    return this.http.delete(`https://blogpessoal-devnovais.herokuapp.com/postagens/${id}`, this.token)
    
  }
  
}
