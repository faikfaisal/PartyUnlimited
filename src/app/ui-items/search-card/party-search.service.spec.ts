/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PartySearchService } from './party-search.service';

describe('PartySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartySearchService]
    });
  });

  it('should ...', inject([PartySearchService], (service: PartySearchService) => {
    expect(service).toBeTruthy();
  }));
});
