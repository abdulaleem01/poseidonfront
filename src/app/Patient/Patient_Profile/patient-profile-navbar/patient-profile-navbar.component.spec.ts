import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileNavbarComponent } from './patient-profile-navbar.component';

describe('PatientProfileNavbarComponent', () => {
  let component: PatientProfileNavbarComponent;
  let fixture: ComponentFixture<PatientProfileNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientProfileNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientProfileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
