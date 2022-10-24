import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTrottinetteComponent } from './ajouter-trottinette.component';

describe('AjouterTrottinetteComponent', () => {
  let component: AjouterTrottinetteComponent;
  let fixture: ComponentFixture<AjouterTrottinetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTrottinetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTrottinetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
