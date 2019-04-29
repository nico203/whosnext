
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';
import { ModalEquipoComponent } from './components/modal-equipo/modal-equipo.component';
import { ModalTrabajoComponent } from './components/modal-trabajo/modal-trabajo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPersonasComponent,
    ModalEquipoComponent,
    ModalTrabajoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
