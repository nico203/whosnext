import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  EQUIPO = 'equipo';
  TRABAJO = 'trabajo';

  constructor() { }

  setItem(key: string, item: any) {
    const jsonString = JSON.stringify(item);
    localStorage.setItem(`${environment.keyLocalstorage}_${key}`, jsonString);
  }

  getItem(key: string): any {
    const jsonString = localStorage.getItem(`${environment.keyLocalstorage}_${key}`);
    return JSON.parse(jsonString);
  }

  setEquipo(equipo: string[]) {
    this.setItem(this.EQUIPO, equipo);
  }

  getEquipo(): string[] {
    return this.getItem(this.EQUIPO);
  }

  getTrabajo(): string {
    return this.getItem(this.TRABAJO);
  }

  setTrabajo(trabajo: string) {
    this.setItem(this.TRABAJO, trabajo);
  }
}
