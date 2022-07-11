import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfissionaisComponent } from './lista-profissionais.component';

describe('ListaProfissionaisComponent', () => {
  let component: ListaProfissionaisComponent;
  let fixture: ComponentFixture<ListaProfissionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProfissionaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
