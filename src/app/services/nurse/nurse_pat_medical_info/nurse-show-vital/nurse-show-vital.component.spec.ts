import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseShowVitalComponent } from './nurse-show-vital.component';

describe('NurseShowVitalComponent', () => {
  let component: NurseShowVitalComponent;
  let fixture: ComponentFixture<NurseShowVitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseShowVitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseShowVitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
