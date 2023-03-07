import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlliesOrganizationsComponent } from './allies-organizations.component';

describe('AlliesOrganizationsComponent', () => {
  let component: AlliesOrganizationsComponent;
  let fixture: ComponentFixture<AlliesOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlliesOrganizationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlliesOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
