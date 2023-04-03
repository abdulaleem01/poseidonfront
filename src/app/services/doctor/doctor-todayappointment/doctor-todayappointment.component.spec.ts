import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTodayappointmentComponent } from './doctor-todayappointment.component';

describe('DoctorTodayappointmentComponent', () => {
  let component: DoctorTodayappointmentComponent;
  let fixture: ComponentFixture<DoctorTodayappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorTodayappointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorTodayappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
