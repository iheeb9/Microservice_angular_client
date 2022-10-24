import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBaladeComponent } from './all-balade.component';

describe('AllBaladeComponent', () => {
  let component: AllBaladeComponent;
  let fixture: ComponentFixture<AllBaladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBaladeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
