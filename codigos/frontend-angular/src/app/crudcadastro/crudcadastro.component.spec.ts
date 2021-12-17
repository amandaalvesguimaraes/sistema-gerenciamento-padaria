import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcadastroComponent } from './crudcadastro.component';

describe('CrudcadastroComponent', () => {
  let component: CrudcadastroComponent;
  let fixture: ComponentFixture<CrudcadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudcadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudcadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
