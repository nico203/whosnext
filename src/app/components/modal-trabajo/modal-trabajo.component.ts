import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'foundation-sites';


@Component({
  selector: 'app-modal-trabajo',
  templateUrl: './modal-trabajo.component.html',
  styleUrls: ['./modal-trabajo.component.sass']
})
export class ModalTrabajoComponent implements OnInit, AfterViewInit {

  @ViewChild('modal') modal: ElementRef;
  reveal: FoundationSites.Reveal;

  trabajo: string;

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
    this.trabajo = '';
  }
}
