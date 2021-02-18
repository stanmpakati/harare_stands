import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandsComponent } from './stands.component';

describe('StandsComponent', () => {
  let component: StandsComponent;
  let fixture: ComponentFixture<StandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
