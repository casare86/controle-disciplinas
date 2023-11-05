import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDataComponent } from './detalhes-data.component';

describe('DetalhesDataComponent', () => {
  let component: DetalhesDataComponent;
  let fixture: ComponentFixture<DetalhesDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesDataComponent]
    });
    fixture = TestBed.createComponent(DetalhesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
