import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Usuario } from './../../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: Usuario = new Usuario()
  idUsuario: number
  confirmarSenha: string
  usuarioTipo: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUser(this.idUsuario)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
   }

  tipoUsuario(event: any) {
    this.usuarioTipo = event.target.value
   }

  atualizar(){
    this.user.tipoUsuario = this.usuarioTipo

     if(this.user.senha != this.confirmarSenha) {
      this.alertas.showAlertDanger('As senhas estão incorretas.')
     } else {
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {this.user = resp
      this.router.navigate(['/inicio'])
      this.alertas.showAlertSuccess('Usuário atualizado com sucesso, faça o login novamente!')
      environment.token = ''
      environment.nome = ''
      environment.foto = ''
      environment.id = 0
      this.router.navigate(['/entrar'])
      })
     }
  }

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

}
