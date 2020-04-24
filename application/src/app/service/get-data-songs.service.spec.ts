import { TestBed } from '@angular/core/testing';

import { GetDataSongsService } from './get-data-songs.service';

describe('GetDataSongsService', () => {
  let service: GetDataSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
