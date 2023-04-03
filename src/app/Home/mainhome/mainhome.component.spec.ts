import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainhomeComponent } from './mainhome.component';

describe('MainhomeComponent', () => {
  let component: MainhomeComponent;
  let fixture: ComponentFixture<MainhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
