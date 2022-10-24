import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrottinetteComponent } from './list-trottinette.component';

describe('ListTrottinetteComponent', () => {
  let component: ListTrottinetteComponent;
  let fixture: ComponentFixture<ListTrottinetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrottinetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrottinetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
