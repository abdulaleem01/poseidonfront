import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseAppointmentPageComponent } from './nurse-appointment-page.component';

describe('NurseAppointmentPageComponent', () => {
  let component: NurseAppointmentPageComponent;
  let fixture: ComponentFixture<NurseAppointmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseAppointmentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
