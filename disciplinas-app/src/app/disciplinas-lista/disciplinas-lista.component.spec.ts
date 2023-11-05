import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinasListaComponent } from './disciplinas-lista.component';

describe('DisciplinasListaComponent', () => {
  let component: DisciplinasListaComponent;
  let fixture: ComponentFixture<DisciplinasListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinasListaComponent]
    });
    fixture = TestBed.createComponent(DisciplinasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
