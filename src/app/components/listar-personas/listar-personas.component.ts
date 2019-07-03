import { EquipoService } from './../../services/equipo.service';
import { Component, OnInit } from '@angular/core';
import { RandomizrService } from 'src/app/services/randomizr.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.scss']
})
export class ListarPersonasComponent implements OnInit {

  isRnd = false;

  personas: Persona[];

  personaActual: string;

  constructor(
    private equipoService: EquipoService,
    private randomizrService: RandomizrService
  ) { }

  ngOnInit() {
    this.personas = this.mapearEquipo(this.equipoService.getEquipo());

    this.equipoService.equipo$.subscribe(
      equipo => {
        if (equipo) {
          this.personas = this.mapearEquipo(equipo);
        }
      }
    );
  }

  private mapearEquipo(equipo: string[]): Persona[] {
    if (!equipo) { return []; }
    return equipo.map(persona => {
      return {
        nombre: persona,
        eliminado: false
      };
    });
  }

  setRandomizer() {
    this.randomizrService.randomizr(this.isRnd);
  }

  randomizr() {
    const filtered = this.personas.filter(per => !per.eliminado);
    const length = filtered.length;
    const random = Math.floor(Math.random() * length);
    this.personaActual = filtered[random].nombre;
    this.randomizrService.change();
  }
}
