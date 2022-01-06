import { TestBed } from '@angular/core/testing';

import { ListCourseSrvService } from './list-course-srv.service';

describe('ListCourseSrvService', () => {
  let service: ListCourseSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCourseSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
