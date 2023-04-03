import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatMedHistoryDialogComponent } from './pat-med-history-dialog.component';

describe('PatMedHistoryDialogComponent', () => {
  let component: PatMedHistoryDialogComponent;
  let fixture: ComponentFixture<PatMedHistoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatMedHistoryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatMedHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
