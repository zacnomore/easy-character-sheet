import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AbilityComponent } from './ability.component';

describe('AbilityComponent', () => {
  let component: AbilityComponent;
  let fixture: ComponentFixture<AbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilityComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('modifier', () => {
    it('should give a modifier of 0 for a score of 10 or 11', () => {
      expect(component.modifier(10)).toBe(0);
      expect(component.modifier(11)).toBe(0);
    });

    it('should give a modifier of -1 for a score of 8 or 9', () => {
      expect(component.modifier(8)).toBe(-1);
      expect(component.modifier(9)).toBe(-1);
    });

    it('should give a modifier of +1 for a score of 12 or 13', () => {
      expect(component.modifier(12)).toBe(1);
      expect(component.modifier(13)).toBe(1);
    });
  });
});
