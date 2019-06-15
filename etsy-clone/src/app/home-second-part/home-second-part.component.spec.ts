import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSecondPartComponent } from './home-second-part.component';

describe('HomeSecondPartComponent', () => {
  let component: HomeSecondPartComponent;
  let fixture: ComponentFixture<HomeSecondPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSecondPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSecondPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
