import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandtypeComponent } from './standtype.component';

describe('StandtypeComponent', () => {
  let component: StandtypeComponent;
  let fixture: ComponentFixture<StandtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
