import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatAppointmentContentComponent } from './pat-appointment-content.component';

describe('PatAppointmentContentComponent', () => {
  let component: PatAppointmentContentComponent;
  let fixture: ComponentFixture<PatAppointmentContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatAppointmentContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatAppointmentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
