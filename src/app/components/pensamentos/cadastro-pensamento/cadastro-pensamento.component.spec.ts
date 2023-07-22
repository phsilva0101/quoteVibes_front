import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPensamentoComponent } from './cadastro-pensamento.component';

describe('CadastroPensamentoComponent', () => {
  let component: CadastroPensamentoComponent;
  let fixture: ComponentFixture<CadastroPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
