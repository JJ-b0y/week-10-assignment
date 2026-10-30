import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityOpportunities } from './community-opportunities';

describe('CommunityOpportunities', () => {
  let component: CommunityOpportunities;
  let fixture: ComponentFixture<CommunityOpportunities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityOpportunities],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityOpportunities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
