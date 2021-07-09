import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestasComponent } from './componentes/encuestas/encuestas.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { LigasComponent } from './componentes/ligas/ligas.component';
import { ListarEComponent } from './componentes/listar-e/listar-e.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'encuestas', component: EncuestasComponent },
  { path: 'ligas', component: LigasComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: 'listar-e', component: ListarEComponent },




  { path: '**', component: UsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
