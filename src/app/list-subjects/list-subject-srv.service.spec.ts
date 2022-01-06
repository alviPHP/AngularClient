import { TestBed } from '@angular/core/testing';

import { ListSubjectSrvService } from './list-subject-srv.service';

describe('ListSubjectSrvService', () => {
  let service: ListSubjectSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSubjectSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
