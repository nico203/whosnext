import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { hexToComplimentary } from '../functions/hexToComplimentary';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class RandomizrService {

  defaultsColors: string[] = [];

  private randomizrSubject = new Subject<boolean>();

  private changeSubject = new Subject();

  randomizr$ = this.randomizrSubject.asObservable();

  change$ = this.changeSubject.asObservable();

  constructor() { }

  initRandomizr() {
    this.defaultsColors = this.generateColors();
  }

  randomizr(val: boolean) {
    const $body = $('body');
    if (!val) {
      $body.css({
        'background-color': ''
      }).removeClass('randomizr');
    } else  {
      $body.addClass('randomizr');
    }
    this.randomizrSubject.next(val);
  }

  generateColors(): string[] {
    const colors = [];
    let color: string;
    for (let i = 0; i < 3; i++) {
      color = this.generateRandomColor();
      colors.push(color);
      colors.push(this.getComplementaryColor(color));
    }
    return colors;
  }

  change() {
    $('body').css({
      'background-color': this.generateRandomColor()
    });
    this.changeSubject.next();
  }

  generateRandomNumber(top?: number): number {
    const num = top ? top : 100;
    return Math.floor(Math.random() * num);
  }

  generateRandomColor(): string {
    const choices = '0123456789ABCDEF';

    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += choices.charAt(this.generateRandomNumber(16));
    }
    return color;
  }

  getComplementaryColor(color: string): string {
    return hexToComplimentary(color);
  }
}
