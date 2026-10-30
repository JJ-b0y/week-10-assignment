import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsOpportunities } from './programs-opportunities';

describe('ProgramsOpportunities', () => {
  let component: ProgramsOpportunities;
  let fixture: ComponentFixture<ProgramsOpportunities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramsOpportunities],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramsOpportunities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
