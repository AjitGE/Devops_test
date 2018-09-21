import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromodetailaccordianComponent } from './promodetailaccordian.component';

describe('PromodetailaccordianComponent', () => {
  let component: PromodetailaccordianComponent;
  let fixture: ComponentFixture<PromodetailaccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromodetailaccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromodetailaccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
