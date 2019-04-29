import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal-equipo',
  templateUrl: './modal-equipo.component.html',
  styleUrls: ['./modal-equipo.component.sass']
})
export class ModalEquipoComponent implements OnInit {

  @ViewChild('modal') modal: ElementRef;
  reveal: FoundationSites.Reveal;

  textoEquipos: string;

  constructor() { }

  ngOnInit() {
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
    this.cerrar();
  }

  limpiar() {
    this.textoEquipos = '';
  }
}
