import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlenMapComponent } from './glen-map.component';

describe('GlenMapComponent', () => {
  let component: GlenMapComponent;
  let fixture: ComponentFixture<GlenMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlenMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlenMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
