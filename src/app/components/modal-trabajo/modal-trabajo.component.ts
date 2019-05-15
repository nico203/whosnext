import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';
import { LocalStorageService } from './../../services/local-storage.service';
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

  private trabajoSubject = new Subject<string>();

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.trabajo = this.localStorageService.getTrabajo();

    this.trabajoSubject.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(
      trabajo => this.localStorageService.setTrabajo(trabajo)
    );
  }

  ngAfterViewInit() {
    this.reveal = new Foundation.Reveal($(this.modal.nativeElement));
  }

  change() {
    this.trabajoSubject.next(this.trabajo);
  }

  abrir() {
    this.reveal.open();
  }

  cerrar() {
    this.reveal.close();
  }

  guardar() {
    this.localStorageService.setTrabajo(this.trabajo);
    this.cerrar();
  }

  limpiar() {
    this.trabajo = '';
  }
}
