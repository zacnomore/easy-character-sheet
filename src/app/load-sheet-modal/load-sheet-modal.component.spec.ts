import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSheetModalComponent } from './load-sheet-modal.component';

describe('LoadSheetModalComponent', () => {
  let component: LoadSheetModalComponent;
  let fixture: ComponentFixture<LoadSheetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadSheetModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadSheetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
