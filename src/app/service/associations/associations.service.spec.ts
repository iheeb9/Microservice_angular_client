import { TestBed } from '@angular/core/testing';

import { AssociationsService } from './associations.service';

describe('AssociationService', () => {
  let service: AssociationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
