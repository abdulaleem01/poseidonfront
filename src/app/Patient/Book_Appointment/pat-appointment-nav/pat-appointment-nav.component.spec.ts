import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatAppointmentNavComponent } from './pat-appointment-nav.component';

describe('PatAppointmentNavComponent', () => {
  let component: PatAppointmentNavComponent;
  let fixture: ComponentFixture<PatAppointmentNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatAppointmentNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatAppointmentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
