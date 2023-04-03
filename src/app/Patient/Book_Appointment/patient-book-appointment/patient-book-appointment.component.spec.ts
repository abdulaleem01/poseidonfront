import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBookAppointmentComponent } from './patient-book-appointment.component';

describe('PatientBookAppointmentComponent', () => {
  let component: PatientBookAppointmentComponent;
  let fixture: ComponentFixture<PatientBookAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientBookAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientBookAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
