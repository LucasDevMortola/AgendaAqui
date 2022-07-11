import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfisisonaisComponent } from './profisisonais.component';

describe('ProfisisonaisComponent', () => {
  let component: ProfisisonaisComponent;
  let fixture: ComponentFixture<ProfisisonaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfisisonaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfisisonaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
