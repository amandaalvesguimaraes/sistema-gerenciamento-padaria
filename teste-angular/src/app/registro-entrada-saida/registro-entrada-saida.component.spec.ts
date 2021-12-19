import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEntradaSaidaComponent } from './registro-entrada-saida.component';

describe('RegistroEntradaSaidaComponent', () => {
  let component: RegistroEntradaSaidaComponent;
  let fixture: ComponentFixture<RegistroEntradaSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEntradaSaidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEntradaSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
