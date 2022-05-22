import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoadingPageComponent } from './views/loading-page/loading-page.component';
import { ResultadosRoomComponent } from './views/resultados-room/resultados-room.component';
import { BuscarRoomComponent } from './cards/buscar-room/buscar-room.component';
import { BuscarCompaneroComponent } from './cards/buscar-companero/buscar-companero.component';
import { PublicarRoomComponent } from './cards/publicar-room/publicar-room.component';
import { RoomCardComponent } from './cards/room-card/room-card.component';
import { UserCardComponent } from './cards/user-card/user-card.component';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { FormBtnComponent } from './views/form-btn/form-btn.component';
import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';
import { EditarPerfilUsuarioComponent } from './views/editar-perfil-usuario/editar-perfil-usuario.component';
import { EliminarPerfilComponent } from './views/eliminar-perfil/eliminar-perfil.component';
import { FavoritosComponent } from './views/favoritos/favoritos.component';
import { PerfilCardComponent } from './cards/perfil-card/perfil-card.component';
import { SectionFiltrosComponent } from './filtros/section-filtros/section-filtros.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { PublicacionesComponent } from './views/publicaciones/publicaciones.component';
import { ListarRoomsComponent } from './listados/listar-rooms/listar-rooms.component';
import { ListarUsersComponent } from './listados/listar-users/listar-users.component';
import { FormRoomComponent } from './views/form-room/form-room.component';
import { FormCompaneroComponent } from './views/form-companero/form-companero.component';
import { FormPublicarComponent } from './views/form-publicar/form-publicar.component';
import { FormLoginComponent } from './views/form-login/form-login.component';
import { FormRegistroComponent } from './views/form-registro/form-registro.component';
import { FormCrearCuentaComponent } from './views/form-crear-cuenta/form-crear-cuenta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingPageComponent,
    ResultadosRoomComponent,
    BuscarCompaneroComponent,
    BuscarRoomComponent,
    PublicarRoomComponent,
    RoomCardComponent,
    FooterComponent,
    HeaderComponent,
    ErrorPageComponent,
    UserCardComponent,
    FormBtnComponent,
    PerfilUsuarioComponent,
    EditarPerfilUsuarioComponent,
    EliminarPerfilComponent,
    FavoritosComponent,
    PerfilCardComponent,
    SectionFiltrosComponent,
    Error404PageComponent,
    PublicacionesComponent,
    ListarRoomsComponent,
    ListarUsersComponent,
    FormRoomComponent,
    FormCompaneroComponent,
    FormPublicarComponent,
    FormLoginComponent,
    FormRegistroComponent,
    FormCrearCuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }