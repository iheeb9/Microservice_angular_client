import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFrontComponent } from './show-front.component';

describe('ShowFrontComponent', () => {
  let component: ShowFrontComponent;
  let fixture: ComponentFixture<ShowFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
