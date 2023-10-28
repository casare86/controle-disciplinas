import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastroDisciplinaComponent } from './modal-cadastro-disciplina.component';

describe('ModalCadastroDisciplinaComponent', () => {
  let component: ModalCadastroDisciplinaComponent;
  let fixture: ComponentFixture<ModalCadastroDisciplinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCadastroDisciplinaComponent]
    });
    fixture = TestBed.createComponent(ModalCadastroDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
