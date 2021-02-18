import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityToggleComponent } from './community-toggle.component';

describe('CommunityToggleComponent', () => {
  let component: CommunityToggleComponent;
  let fixture: ComponentFixture<CommunityToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
