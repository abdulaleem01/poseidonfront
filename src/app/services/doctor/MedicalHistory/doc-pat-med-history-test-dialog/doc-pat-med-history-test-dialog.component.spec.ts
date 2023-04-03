import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPatMedHistoryTestDialogComponent } from './doc-pat-med-history-test-dialog.component';

describe('DocPatMedHistoryTestDialogComponent', () => {
  let component: DocPatMedHistoryTestDialogComponent;
  let fixture: ComponentFixture<DocPatMedHistoryTestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocPatMedHistoryTestDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocPatMedHistoryTestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
