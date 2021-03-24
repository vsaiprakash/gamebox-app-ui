import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDropdownCardComponent } from './profile-dropdown-card.component';

describe('ProfileDropdownCardComponent', () => {
  let component: ProfileDropdownCardComponent;
  let fixture: ComponentFixture<ProfileDropdownCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDropdownCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDropdownCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
