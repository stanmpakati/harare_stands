import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinPriceInputComponent } from './min-price-input.component';

describe('MinPriceInputComponent', () => {
  let component: MinPriceInputComponent;
  let fixture: ComponentFixture<MinPriceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinPriceInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinPriceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
