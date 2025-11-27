import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosConstruidos } from './projetos-construidos';

describe('ProjetosConstruidos', () => {
  let component: ProjetosConstruidos;
  let fixture: ComponentFixture<ProjetosConstruidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosConstruidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosConstruidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
