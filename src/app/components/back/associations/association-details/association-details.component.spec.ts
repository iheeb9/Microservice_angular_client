import { AssociationDetailsComponent } from './association-details.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('AssociationDetailsComponent', () => {
  let component: AssociationDetailsComponent;
  let fixture: ComponentFixture<AssociationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
