import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursePatHistoryPrescriptionComponent } from './nurse-pat-history-prescription.component';

describe('NursePatHistoryPrescriptionComponent', () => {
  let component: NursePatHistoryPrescriptionComponent;
  let fixture: ComponentFixture<NursePatHistoryPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursePatHistoryPrescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursePatHistoryPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
