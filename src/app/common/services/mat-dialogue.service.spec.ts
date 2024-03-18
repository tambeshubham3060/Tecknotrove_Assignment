import { TestBed } from '@angular/core/testing';

import { MatDialogueService } from './mat-dialogue.service';

describe('MatDialogueService', () => {
  let service: MatDialogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatDialogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
