import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBaladeComponent } from './list-balade.component';

describe('ListBaladeComponent', () => {
  let component: ListBaladeComponent;
  let fixture: ComponentFixture<ListBaladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBaladeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
