import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAvailDeleteDialogboxComponent } from './admin-avail-delete-dialogbox.component';

describe('AdminAvailDeleteDialogboxComponent', () => {
  let component: AdminAvailDeleteDialogboxComponent;
  let fixture: ComponentFixture<AdminAvailDeleteDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAvailDeleteDialogboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAvailDeleteDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
