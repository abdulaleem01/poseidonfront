import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursePatHistoryDialogComponent } from './nurse-pat-history-dialog.component';

describe('NursePatHistoryDialogComponent', () => {
  let component: NursePatHistoryDialogComponent;
  let fixture: ComponentFixture<NursePatHistoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursePatHistoryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursePatHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
