import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileHomeComponent } from './patient-profile-home.component';

describe('PatientProfileHomeComponent', () => {
  let component: PatientProfileHomeComponent;
  let fixture: ComponentFixture<PatientProfileHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientProfileHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
