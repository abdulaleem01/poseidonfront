import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseVitalContentComponent } from './nurse-vital-content.component';

describe('NurseVitalContentComponent', () => {
  let component: NurseVitalContentComponent;
  let fixture: ComponentFixture<NurseVitalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseVitalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseVitalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
