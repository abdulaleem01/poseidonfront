import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursePatContentComponent } from './nurse-pat-content.component';

describe('NursePatContentComponent', () => {
  let component: NursePatContentComponent;
  let fixture: ComponentFixture<NursePatContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursePatContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursePatContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
