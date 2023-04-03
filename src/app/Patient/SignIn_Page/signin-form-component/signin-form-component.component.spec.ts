import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninFormComponentComponent } from './signin-form-component.component';

describe('SigninFormComponentComponent', () => {
  let component: SigninFormComponentComponent;
  let fixture: ComponentFixture<SigninFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
