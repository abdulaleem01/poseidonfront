import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedappointmentComponent } from './acceptedappointment.component';

describe('AcceptedappointmentComponent', () => {
  let component: AcceptedappointmentComponent;
  let fixture: ComponentFixture<AcceptedappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedappointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
