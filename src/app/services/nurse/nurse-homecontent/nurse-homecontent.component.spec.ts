import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseHomecontentComponent } from './nurse-homecontent.component';

describe('NurseHomecontentComponent', () => {
  let component: NurseHomecontentComponent;
  let fixture: ComponentFixture<NurseHomecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseHomecontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseHomecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
