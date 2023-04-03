import { ComponentFixture, TestBed } from '@angular/core/testing';


import { PatAppointmentHistoryTableComponent } from './pat-appointment-history-table.component';

describe('PatAppointmentHistoryTableComponent', () => {
  let component: PatAppointmentHistoryTableComponent;
  let fixture: ComponentFixture<PatAppointmentHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatAppointmentHistoryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatAppointmentHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
