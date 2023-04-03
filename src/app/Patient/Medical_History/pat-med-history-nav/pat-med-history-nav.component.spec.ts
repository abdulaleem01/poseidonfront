import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatMedHistoryNavComponent } from './pat-med-history-nav.component';

describe('PatMedHistoryNavComponent', () => {
  let component: PatMedHistoryNavComponent;
  let fixture: ComponentFixture<PatMedHistoryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatMedHistoryNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatMedHistoryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
