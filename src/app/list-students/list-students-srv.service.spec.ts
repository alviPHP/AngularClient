import { TestBed } from '@angular/core/testing';

import { ListStudentsSrvService } from './list-students-srv.service';

describe('ListStudentsSrvService', () => {
  let service: ListStudentsSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListStudentsSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
