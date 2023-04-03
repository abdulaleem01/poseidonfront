import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAvailableDoctorComponent } from './admin-available-doctor.component';

describe('AdminAvailableDoctorComponent', () => {
  let component: AdminAvailableDoctorComponent;
  let fixture: ComponentFixture<AdminAvailableDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAvailableDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAvailableDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
