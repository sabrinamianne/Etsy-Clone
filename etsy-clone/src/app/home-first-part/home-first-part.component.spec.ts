import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFirstPartComponent } from './home-first-part.component';

describe('HomeFirstPartComponent', () => {
  let component: HomeFirstPartComponent;
  let fixture: ComponentFixture<HomeFirstPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFirstPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFirstPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
