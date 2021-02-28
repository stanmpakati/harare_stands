import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyStandComponent } from './buy-stand.component';

describe('BuyStandComponent', () => {
  let component: BuyStandComponent;
  let fixture: ComponentFixture<BuyStandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyStandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
