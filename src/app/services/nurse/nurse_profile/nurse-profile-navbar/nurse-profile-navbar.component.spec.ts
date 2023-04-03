import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseProfileNavbarComponent } from './nurse-profile-navbar.component';

describe('NurseProfileNavbarComponent', () => {
  let component: NurseProfileNavbarComponent;
  let fixture: ComponentFixture<NurseProfileNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseProfileNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseProfileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
