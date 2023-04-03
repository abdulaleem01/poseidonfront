import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatReasonDialogComponent } from './pat-reason-dialog.component';

describe('PatReasonDialogComponent', () => {
  let component: PatReasonDialogComponent;
  let fixture: ComponentFixture<PatReasonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatReasonDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatReasonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
