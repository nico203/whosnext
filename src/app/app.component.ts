import { ModalEquipoComponent } from './components/modal-equipo/modal-equipo.component';
import { ModalTrabajoComponent } from './components/modal-trabajo/modal-trabajo.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ModalTrabajoComponent) modalTrabajo: ModalTrabajoComponent;
  @ViewChild(ModalEquipoComponent) modalEquipo: ModalEquipoComponent;

  title = 'whosnext';

  trabajo() {
    this.modalTrabajo.abrir();
  }

  equipo() {
    this.modalEquipo.abrir();
  }
}
