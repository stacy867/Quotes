import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayQuoteComponent } from './diplay-quote.component';

describe('DiplayQuoteComponent', () => {
  let component: DiplayQuoteComponent;
  let fixture: ComponentFixture<DiplayQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplayQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplayQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
