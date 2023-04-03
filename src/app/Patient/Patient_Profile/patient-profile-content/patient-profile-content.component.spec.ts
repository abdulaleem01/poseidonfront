import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileContentComponent } from './patient-profile-content.component';

describe('PatientProfileContentComponent', () => {
  let component: PatientProfileContentComponent;
  let fixture: ComponentFixture<PatientProfileContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientProfileContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientProfileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
