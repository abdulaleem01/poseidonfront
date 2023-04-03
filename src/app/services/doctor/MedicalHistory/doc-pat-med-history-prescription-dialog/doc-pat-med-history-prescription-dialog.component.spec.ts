import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPatMedHistoryPrescriptionDialogComponent } from './doc-pat-med-history-prescription-dialog.component';

describe('DocPatMedHistoryPrescriptionDialogComponent', () => {
  let component: DocPatMedHistoryPrescriptionDialogComponent;
  let fixture: ComponentFixture<DocPatMedHistoryPrescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocPatMedHistoryPrescriptionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocPatMedHistoryPrescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
