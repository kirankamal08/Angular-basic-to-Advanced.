import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1FundamentalsComponent } from './day-1-fundamentals.component';

describe('Day1FundamentalsComponent', () => {
  let component: Day1FundamentalsComponent;
  let fixture: ComponentFixture<Day1FundamentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day1FundamentalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day1FundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
