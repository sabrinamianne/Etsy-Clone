import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBar2Component } from './nav-bar-2.component';

describe('NavBar2Component', () => {
  let component: NavBar2Component;
  let fixture: ComponentFixture<NavBar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
