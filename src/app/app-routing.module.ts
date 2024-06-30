import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GestionUsuariosComponent } from './components/gestion-usuarios/gestion-usuarios.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { GestionArchivosComponent } from './components/gestion-archivos/gestion-archivos.component';
import { BovedaComponent } from './components/boveda/boveda.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'nav-bar',component:NavBarComponent},
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'notificaciones', component: NotificacionesComponent},
  { path: 'mensajes', component: MensajesComponent },
  { path: 'gestion-archivos', component: GestionArchivosComponent },
  { path: 'gestion-usuarios', component: GestionUsuariosComponent },
  {path:'boveda',component:BovedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
