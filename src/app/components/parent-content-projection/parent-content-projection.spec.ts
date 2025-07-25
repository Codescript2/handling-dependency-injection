import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentContentProjection } from './parent-content-projection';

describe('ParentContentProjection', () => {
  let component: ParentContentProjection;
  let fixture: ComponentFixture<ParentContentProjection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentContentProjection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentContentProjection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
