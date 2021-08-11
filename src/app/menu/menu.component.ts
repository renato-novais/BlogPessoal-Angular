import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id = environment.id

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  sair(){
    this.router.navigate(['/entrar'])
    //limpa environment ao sair
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

}
