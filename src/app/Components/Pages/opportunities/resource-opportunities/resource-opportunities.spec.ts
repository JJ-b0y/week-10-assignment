import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceOpportunities } from './resource-opportunities';

describe('ResourceOpportunities', () => {
  let component: ResourceOpportunities;
  let fixture: ComponentFixture<ResourceOpportunities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceOpportunities],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceOpportunities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
