import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficiencyBonusComponent } from './proficiency-bonus.component';

describe('ProficiencyBonusComponent', () => {
  let component: ProficiencyBonusComponent;
  let fixture: ComponentFixture<ProficiencyBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProficiencyBonusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProficiencyBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
