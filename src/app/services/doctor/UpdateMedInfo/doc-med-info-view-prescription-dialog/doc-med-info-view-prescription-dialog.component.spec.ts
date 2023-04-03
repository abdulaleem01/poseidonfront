import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocMedInfoViewPrescriptionDialogComponent } from './doc-med-info-view-prescription-dialog.component';

describe('DocMedInfoViewPrescriptionDialogComponent', () => {
  let component: DocMedInfoViewPrescriptionDialogComponent;
  let fixture: ComponentFixture<DocMedInfoViewPrescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocMedInfoViewPrescriptionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocMedInfoViewPrescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
