import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatMedHistoryContentComponent } from './pat-med-history-content.component';

describe('PatMedHistoryContentComponent', () => {
  let component: PatMedHistoryContentComponent;
  let fixture: ComponentFixture<PatMedHistoryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatMedHistoryContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatMedHistoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
