import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private equipoSubject = new Subject<string[]>();

  equipo$: Observable<string[]> = this.equipoSubject.asObservable();

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  getEquipo(): string[] {
    return this.localStorageService.getEquipo();
  }

  setEquipo(equipo: string[]) {
    this.localStorageService.setEquipo(equipo);
    this.equipoSubject.next(equipo);
  }
  }
