import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { BovedaComponent } from './components/boveda/boveda.component';
import { GestionArchivosComponent } from './components/gestion-archivos/gestion-archivos.component';
import { GestionUsuariosComponent } from './components/gestion-usuarios/gestion-usuarios.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    BusquedaComponent,
    BovedaComponent,
    GestionArchivosComponent,
    GestionUsuariosComponent,
    MensajesComponent,
    NotificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,           
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
