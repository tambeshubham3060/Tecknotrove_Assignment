import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogueComponent } from './mat-dialogue.component';

describe('MatDialogueComponent', () => {
  let component: MatDialogueComponent;
  let fixture: ComponentFixture<MatDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
