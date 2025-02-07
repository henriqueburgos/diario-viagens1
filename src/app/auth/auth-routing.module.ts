import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';
import { UsuarioNaoVerificadoComponent } from './components/usuario-nao-verificado/usuario-nao-verificado.component';
import { UserComponent } from './components/user/user.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';


const redirectLoggedInToDiarios = () => redirectLoggedInTo(['/diarios']);
const redirectLoggedInToUser = () => redirectUnauthorizedTo(['/user']);
const redirectLoggedInToUserAdmin = () => redirectUnauthorizedTo(['/user-admin']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToDiarios),
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    ...canActivate(redirectLoggedInToDiarios),
  },
  {
    path: 'recuperar-senha',
    component: RecuperarSenhaComponent,
    ...canActivate(redirectLoggedInToDiarios),
  },
  {
    path: 'confirmar-email',
    component: UsuarioNaoVerificadoComponent,
    ...canActivate(redirectLoggedInToDiarios),
  },
  { path: 'user',
  component: UserComponent,
  ...canActivate(redirectLoggedInToUser),
  },
  { path: 'user-admin',
  component: UserAdminComponent,
  ...canActivate(redirectLoggedInToUserAdmin),
  }
];

@NgModule({
  // As rotas do array serão unidas com as do app-routing
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
