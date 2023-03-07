import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StatsHeaderComponent } from './stats-header.component';

describe('StatsHeaderComponent', () => {
  let component: StatsHeaderComponent;
  let fixture: ComponentFixture<StatsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsHeaderComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
