import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDionathanGomes } from './about-dionathan-gomes';

describe('AboutDionathanGomes', () => {
  let component: AboutDionathanGomes;
  let fixture: ComponentFixture<AboutDionathanGomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDionathanGomes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDionathanGomes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
