import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuarioCadastro: Usuario = new Usuario()
  confirmarSenha: string
  usuarioTipo: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
   }

  tipoUsuario(event: any) {
    this.usuarioTipo = event.target.value
   }

   cadastrar() {
     this.usuarioCadastro.tipoUsuario = this.usuarioTipo

     if(this.usuarioCadastro.senha != this.confirmarSenha) {
       alert('As senhas estão incorretas.')
     } else {
       this.authService.cadastrar(this.usuarioCadastro).subscribe((resp: Usuario) => {this.usuarioCadastro = resp
      this.router.navigate(['/entrar'])
      alert('Usuário cadastrado com sucesso!')
      })
     }

   }

}
