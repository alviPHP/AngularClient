import { TestBed } from '@angular/core/testing';

import { DesignCourseSrvService } from './design-course-srv.service';

describe('DesignCourseSrvService', () => {
  let service: DesignCourseSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignCourseSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
