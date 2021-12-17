import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudinicialComponent } from './crudinicial.component';

describe('CrudinicialComponent', () => {
  let component: CrudinicialComponent;
  let fixture: ComponentFixture<CrudinicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudinicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudinicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
