import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTrottinetteComponent } from './details-trottinette.component';

describe('DetailsTrottinetteComponent', () => {
  let component: DetailsTrottinetteComponent;
  let fixture: ComponentFixture<DetailsTrottinetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTrottinetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTrottinetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
