import { EquipoService } from './../../services/equipo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.scss']
})
export class ListarPersonasComponent implements OnInit {

  personas: string[] = [];

  personaActual: string;

  constructor(
    private equipoService: EquipoService
  ) { }

  ngOnInit() {
    this.personas = this.equipoService.getEquipo() || [];

    this.equipoService.equipo$.subscribe(
      equipo => {
        if (equipo) {
          this.personas = equipo;
        }
      }
    );
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
