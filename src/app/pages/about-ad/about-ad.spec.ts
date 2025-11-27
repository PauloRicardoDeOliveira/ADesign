import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAd } from './about-ad';

describe('AboutAd', () => {
  let component: AboutAd;
  let fixture: ComponentFixture<AboutAd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutAd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
