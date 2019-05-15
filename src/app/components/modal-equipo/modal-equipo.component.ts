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
    const equipo = this.equipoService.getEquipo();
    if (equipo) {
      this.textoEquipos = equipo.join('\n');
    }
  }

  ngAfterViewInit() {
    this.reveal = new Foundation.Reveal($(this.modal.nativeElement));
  }

  abrir() {
    this.reveal.open();
  }

  cerrar() {
    this.reveal.close();
  }

  guardar() {
    const equipo = this.textoEquipos.split('\n');
    this.equipoService.setEquipo(equipo);
    this.cerrar();
  }

  limpiar() {
    this.textoEquipos = '';
  }
}
