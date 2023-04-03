import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatMedHistoryPrescriptionDialogComponent } from './pat-med-history-prescription-dialog.component';

describe('PatMedHistoryPrescriptionDialogComponent', () => {
  let component: PatMedHistoryPrescriptionDialogComponent;
  let fixture: ComponentFixture<PatMedHistoryPrescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatMedHistoryPrescriptionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatMedHistoryPrescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
