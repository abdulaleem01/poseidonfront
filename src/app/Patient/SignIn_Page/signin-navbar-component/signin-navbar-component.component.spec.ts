import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninNavbarComponentComponent } from './signin-navbar-component.component';

describe('SigninNavbarComponentComponent', () => {
  let component: SigninNavbarComponentComponent;
  let fixture: ComponentFixture<SigninNavbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninNavbarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
