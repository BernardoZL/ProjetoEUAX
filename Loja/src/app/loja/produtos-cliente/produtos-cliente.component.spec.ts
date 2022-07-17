import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosClienteComponent } from './produtos-cliente.component';

describe('ProdutosClienteComponent', () => {
  let component: ProdutosClienteComponent;
  let fixture: ComponentFixture<ProdutosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
