import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTrabajoComponent } from './modal-trabajo.component';

describe('ModalTrabajoComponent', () => {
  let component: ModalTrabajoComponent;
  let fixture: ComponentFixture<ModalTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
