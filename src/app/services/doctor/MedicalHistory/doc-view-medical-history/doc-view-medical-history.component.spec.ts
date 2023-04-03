import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocViewMedicalHistoryComponent } from './doc-view-medical-history.component';

describe('DocViewMedicalHistoryComponent', () => {
  let component: DocViewMedicalHistoryComponent;
  let fixture: ComponentFixture<DocViewMedicalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocViewMedicalHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocViewMedicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
