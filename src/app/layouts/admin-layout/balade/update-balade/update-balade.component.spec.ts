import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBaladeComponent } from './update-balade.component';

describe('UpdateBaladeComponent', () => {
  let component: UpdateBaladeComponent;
  let fixture: ComponentFixture<UpdateBaladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBaladeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
