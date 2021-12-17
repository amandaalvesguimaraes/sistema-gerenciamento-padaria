import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VencimentoProdutosComponent } from './vencimento-produtos.component';

describe('VencimentoProdutosComponent', () => {
  let component: VencimentoProdutosComponent;
  let fixture: ComponentFixture<VencimentoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VencimentoProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VencimentoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
