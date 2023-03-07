import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBackgroundComponent } from './short-background.component';

describe('ShortBackgroundComponent', () => {
  let component: ShortBackgroundComponent;
  let fixture: ComponentFixture<ShortBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortBackgroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShortBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
