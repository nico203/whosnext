import { Component, Input } from '@angular/core';
import { Persona } from '../models/persona';
import { RandomizrDirective } from 'src/app/directives/randomizr.directive';

@Component({
  selector: 'app-item-persona',
  templateUrl: './item-persona.component.html',
  styleUrls: ['./item-persona.component.sass']
})
export class ItemPersonaComponent {

  @Input() persona: Persona;

  constructor(
    private randomizrDirective: RandomizrDirective
  ) { }

  eliminar() {
    this.persona.eliminado = true;
    this.randomizrDirective.eliminar();
  }

  restaurar() {
    this.persona.eliminado = false;
    this.randomizrDirective.restaurar();
  }
}
