import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatAppointmentHistoryNavComponent } from './pat-appointment-history-nav.component';

describe('PatAppointmentHistoryNavComponent', () => {
  let component: PatAppointmentHistoryNavComponent;
  let fixture: ComponentFixture<PatAppointmentHistoryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatAppointmentHistoryNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatAppointmentHistoryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
