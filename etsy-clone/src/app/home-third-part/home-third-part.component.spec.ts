import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThirdPartComponent } from './home-third-part.component';

describe('HomeThirdPartComponent', () => {
  let component: HomeThirdPartComponent;
  let fixture: ComponentFixture<HomeThirdPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeThirdPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThirdPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
