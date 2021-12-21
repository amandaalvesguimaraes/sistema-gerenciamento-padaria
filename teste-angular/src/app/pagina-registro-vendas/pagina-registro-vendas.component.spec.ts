import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRegistroVendasComponent } from './pagina-registro-vendas.component';

describe('PaginaLoginComponent', () => {
  let component: PaginaRegistroVendasComponent;
  let fixture: ComponentFixture<PaginaRegistroVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRegistroVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRegistroVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
