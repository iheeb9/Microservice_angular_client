import { AssociationsListComponent } from './associations-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('AssociationsListComponent', () => {
  let component: AssociationsListComponent;
  let fixture: ComponentFixture<AssociationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
