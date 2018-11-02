import { TestBed, inject } from '@angular/core/testing';

import { CommerceDetailResolver } from './commerce-detail.resolver';

describe('CommerceDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommerceDetailResolver]
    });
  });

  it('should be created', inject([CommerceDetailResolver], (service: CommerceDetailResolver) => {
    expect(service).toBeTruthy();
  }));
});
