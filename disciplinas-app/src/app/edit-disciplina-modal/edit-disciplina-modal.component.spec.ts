import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDisciplinaModalComponent } from './edit-disciplina-modal.component';

describe('EditDisciplinaModalComponent', () => {
  let component: EditDisciplinaModalComponent;
  let fixture: ComponentFixture<EditDisciplinaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDisciplinaModalComponent]
    });
    fixture = TestBed.createComponent(EditDisciplinaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
