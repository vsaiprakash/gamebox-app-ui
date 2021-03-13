import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySelectedComponent } from './category-selected.component';

describe('CategorySelectedComponent', () => {
  let component: CategorySelectedComponent;
  let fixture: ComponentFixture<CategorySelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
