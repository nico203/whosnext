import { EquipoService } from './../../services/equipo.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-modal-equipo',
  templateUrl: './modal-equipo.component.html',
  styleUrls: ['./modal-equipo.component.sass']
})
export class ModalEquipoComponent implements OnInit, AfterViewInit {

  @ViewChild('modal') modal: ElementRef;
  reveal: FoundationSites.Reveal;

  textoEquipos: string;

  constructor(
    private equipoService: EquipoService
  ) { }

  ngOnInit() {
    this.obtenerEquipo();
  }

  obtenerEquipo() {
    const equipo = this.equipoService.getEquipo();
    if (equipo) {
      this.textoEquipos = equipo.join('\n');
    }
  }

  ngAfterViewInit() {
    this.reveal = new Foundation.Reveal($(this.modal.nativeElement));
  }

  abrir() {
    this.obtenerEquipo();
    this.reveal.open();
  }

  cerrar() {
    this.reveal.close();
  }

  guardar() {
    const equipo = this.textoEquipos.split('\n').map(str => str.trim()).filter(str => str.length !== 0).sort();
    this.equipoService.setEquipo(equipo);
    this.cerrar();
  }

  limpiar() {
    this.textoEquipos = '';
  }
}
