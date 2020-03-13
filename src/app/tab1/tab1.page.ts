import { Component } from '@angular/core';
import { UserService } from '../servicos/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // Para paginação
  public page = 1;
  public totalPaginas = 0;

  // Exibir para o usuário
  public totalUsuarios = 0;
  public usuariosPagina = 0;

  // Para guardar a lista de usuários
  public listaUsuarios = [];

  constructor(private userService: UserService) {
    this.buscarUsuario(this.page);
  }

  public buscarUsuario(pagina: Number) {

    this.userService.listaUsuarios(pagina).subscribe(dados => {

      // Para paginação
      this.page = dados['page'];
      this.totalPaginas = dados['total_pages'];
      
      // Exibir para o usuário
      this.usuariosPagina = dados['per_page'];
      this.totalUsuarios = dados['total'];

      // Para guardar a lista de usuários
      this.listaUsuarios = dados['data']; 

    });

  }

}
