import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTrottinetteComponent } from './modifier-trottinette.component';

describe('ModifierTrottinetteComponent', () => {
  let component: ModifierTrottinetteComponent;
  let fixture: ComponentFixture<ModifierTrottinetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTrottinetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTrottinetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
