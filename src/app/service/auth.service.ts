import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this.token = { headers: new HttpHeaders().set('Authorization', environment.token)}
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://blogpessoal-devnovais.herokuapp.com/usuarios/login', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://blogpessoal-devnovais.herokuapp.com/usuarios/cadastro', usuario)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://blogpessoal-devnovais.herokuapp.com/usuarios/${id}`, this.token)
  }

  logado() {
    let ok: boolean = false
    if(environment.token != '') {
      ok = true
    }
    return ok
  }

  adm() {
    let ok: boolean = false
    if(environment.tipo == 'adm') {
      ok = true
    }
    return ok
  }
}
