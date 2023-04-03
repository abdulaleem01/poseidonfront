import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseAppointmentContentComponent } from './nurse-appointment-content.component';

describe('NurseAppointmentContentComponent', () => {
  let component: NurseAppointmentContentComponent;
  let fixture: ComponentFixture<NurseAppointmentContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseAppointmentContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseAppointmentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
