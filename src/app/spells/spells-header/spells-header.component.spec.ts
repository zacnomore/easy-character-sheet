import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsHeaderComponent } from './spells-header.component';

describe('SpellsHeaderComponent', () => {
  let component: SpellsHeaderComponent;
  let fixture: ComponentFixture<SpellsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellsHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpellsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
