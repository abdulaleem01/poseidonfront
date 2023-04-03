import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseProfilePageComponent } from './nurse-profile-page.component';

describe('NurseProfilePageComponent', () => {
  let component: NurseProfilePageComponent;
  let fixture: ComponentFixture<NurseProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
