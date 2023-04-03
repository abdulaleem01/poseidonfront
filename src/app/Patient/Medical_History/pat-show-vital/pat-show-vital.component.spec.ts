import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatShowVitalComponent } from './pat-show-vital.component';

describe('PatShowVitalComponent', () => {
  let component: PatShowVitalComponent;
  let fixture: ComponentFixture<PatShowVitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatShowVitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatShowVitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
