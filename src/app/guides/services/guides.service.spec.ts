import { TestBed } from '@angular/core/testing';

import { GuidesService } from './guides.service';

describe('GuideService', () => {
  let service: GuidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
