import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandTypeToggleComponent } from './stand-type-toggle.component';

describe('StandTypeToggleComponent', () => {
  let component: StandTypeToggleComponent;
  let fixture: ComponentFixture<StandTypeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandTypeToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandTypeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
