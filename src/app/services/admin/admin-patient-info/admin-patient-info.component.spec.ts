import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPatientInfoComponent } from './admin-patient-info.component';

describe('AdminPatientInfoComponent', () => {
  let component: AdminPatientInfoComponent;
  let fixture: ComponentFixture<AdminPatientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPatientInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPatientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
