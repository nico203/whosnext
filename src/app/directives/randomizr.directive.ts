import { Directive, Renderer2, ElementRef, OnDestroy, Input, OnInit } from '@angular/core';
import { RandomizrService } from '../services/randomizr.service';
import { takeUntil, finalize } from 'rxjs/internal/operators';
import { Subject, interval } from 'rxjs';

@Directive({
  selector: '[appRandomizr]'
})
export class RandomizrDirective implements OnInit, OnDestroy {

  @Input() extras: { [key: string]: string | number } = {};

  destroyed$ = new Subject();

  restaurado$ = new Subject();

  coloresEliminado = [];
  randomizr = false;

  colores: string[];

  constructor(
    private randomizrService: RandomizrService,
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, 'randomizr');
    this.randomizrService.change$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(
      () => this.cambiarEstilos()
    );
    this.randomizrService.randomizr$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(
      (isRnd) => {
        this.randomizr = isRnd;
        if (!isRnd) {
          this.resetEstilos();
          this.restaurar();
        }
      }
    );

    this.coloresEliminado = this.randomizrService.generateColors();
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.element.nativeElement, 'randomizr');
    this.destroyed$.next(true);
    this.destroyed$.complete();
    this.restaurado$.complete();
  }

  eliminar() {
    this.colores = this.randomizr ? this.coloresEliminado : this.randomizrService.defaultsColors;
    let indice = 0;
    interval(1000).pipe(
      takeUntil(this.restaurado$),
      finalize(() => {
        this.renderer.removeStyle(this.element.nativeElement, 'background-color');
      }),
    ).subscribe(() => {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', this.colores[indice]);
      indice = (indice === 5) ? 0 : indice + 1;
    });
  }

  restaurar() {
    this.restaurado$.next(true);
  }

  cambiarEstilos() {
    const estilos = {};

    const color = this.randomizrService.generateRandomColor();
    const complementaryColor = this.randomizrService.getComplementaryColor(color);

    // background-color: green;
    estilos['background-color'] = color;

    // color: white;
    estilos['color'] = complementaryColor;
    estilos['border-color'] = complementaryColor;

    estilos['font-weight'] = 'bold';

    Object.assign(estilos, this.extras);

    for (const estilo in estilos) {
      if (estilos.hasOwnProperty(estilo)) {
        this.renderer.setStyle(this.element.nativeElement, estilo, estilos[estilo]);
      }
    }
  }

  resetEstilos() {
    const estilos = [
      'background-color',
      'color',
      'font-weight',
      'border-color'
    ].concat(Object.keys(this.extras));

    for (const estilo of estilos) {
      this.renderer.removeStyle(this.element.nativeElement, estilo);
    }
  }
}
