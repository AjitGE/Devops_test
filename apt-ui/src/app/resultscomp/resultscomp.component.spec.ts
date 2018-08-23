import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultscompComponent } from './resultscomp.component';

describe('ResultscompComponent', () => {
  let component: ResultscompComponent;
  let fixture: ComponentFixture<ResultscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
