import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseAppointmentNavbarComponent } from './nurse-appointment-navbar.component';

describe('NurseAppointmentNavbarComponent', () => {
  let component: NurseAppointmentNavbarComponent;
  let fixture: ComponentFixture<NurseAppointmentNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseAppointmentNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseAppointmentNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
