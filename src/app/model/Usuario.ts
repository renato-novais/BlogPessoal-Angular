import { Postagem } from "./Postagem"

export class Usuario{
    public id: number
    public nome: string
    public username: string
    public senha: string
    public foto: string
    public tipoUsuario: string
    public postagem: Postagem[]
}