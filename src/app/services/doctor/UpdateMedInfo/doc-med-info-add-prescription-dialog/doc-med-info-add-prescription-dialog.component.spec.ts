import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocMedInfoAddPrescriptionDialogComponent } from './doc-med-info-add-prescription-dialog.component';

describe('DocMedInfoAddPrescriptionDialogComponent', () => {
  let component: DocMedInfoAddPrescriptionDialogComponent;
  let fixture: ComponentFixture<DocMedInfoAddPrescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocMedInfoAddPrescriptionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocMedInfoAddPrescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
