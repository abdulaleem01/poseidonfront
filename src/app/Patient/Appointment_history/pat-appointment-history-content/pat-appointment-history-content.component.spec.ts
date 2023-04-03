import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatAppointmentHistoryContentComponent } from './pat-appointment-history-content.component';

describe('PatAppointmentHistoryContentComponent', () => {
  let component: PatAppointmentHistoryContentComponent;
  let fixture: ComponentFixture<PatAppointmentHistoryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatAppointmentHistoryContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatAppointmentHistoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
