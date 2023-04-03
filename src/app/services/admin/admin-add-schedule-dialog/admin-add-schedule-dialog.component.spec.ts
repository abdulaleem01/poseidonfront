import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddScheduleDialogComponent } from './admin-add-schedule-dialog.component';

describe('AdminAddScheduleDialogComponent', () => {
  let component: AdminAddScheduleDialogComponent;
  let fixture: ComponentFixture<AdminAddScheduleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddScheduleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
