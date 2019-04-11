import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.scss']
})
export class ListarPersonasComponent implements OnInit {

  personas: string[] = [
    'prueba',
    'prueba1',
    'asd',
    '34',
    'jrtg',
    'rwe',
  ];

  personaActual: string;

  constructor() { }

  ngOnInit() {
  }

  randomizr() {
    const length = this.personas.length;
    const random = Math.floor(Math.random() * length);
    this.personaActual = this.personas[random];
  }

  eliminar(indice: number) {
    this.personas.splice(indice, 1);
  }
}
