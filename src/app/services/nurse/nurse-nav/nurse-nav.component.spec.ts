import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseNavComponent } from './nurse-nav.component';

describe('NurseNavComponent', () => {
  let component: NurseNavComponent;
  let fixture: ComponentFixture<NurseNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
