import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditDialogboxComponent } from './patient-edit-dialogbox.component';

describe('PatientEditDialogboxComponent', () => {
  let component: PatientEditDialogboxComponent;
  let fixture: ComponentFixture<PatientEditDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEditDialogboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientEditDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
