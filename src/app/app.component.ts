import { ModalEquipoComponent } from './components/modal-equipo/modal-equipo.component';
import { ModalTrabajoComponent } from './components/modal-trabajo/modal-trabajo.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import { RandomizrService } from './services/randomizr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(ModalTrabajoComponent) modalTrabajo: ModalTrabajoComponent;
  @ViewChild(ModalEquipoComponent) modalEquipo: ModalEquipoComponent;

  title = 'whosnext';

  constructor(
    private randomizrService: RandomizrService
  ) { }

  ngOnInit() {
    this.randomizrService.initRandomizr();
  }

  trabajo() {
    this.modalTrabajo.abrir();
  }

  equipo() {
    this.modalEquipo.abrir();
  }
}
