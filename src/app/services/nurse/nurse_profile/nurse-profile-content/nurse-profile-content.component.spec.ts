import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseProfileContentComponent } from './nurse-profile-content.component';

describe('NurseProfileContentComponent', () => {
  let component: NurseProfileContentComponent;
  let fixture: ComponentFixture<NurseProfileContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseProfileContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseProfileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
