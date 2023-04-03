import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatAppointmentHistoryComponent } from './pat-appointment-history.component';

describe('PatAppointmentHistoryComponent', () => {
  let component: PatAppointmentHistoryComponent;
  let fixture: ComponentFixture<PatAppointmentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatAppointmentHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatAppointmentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
