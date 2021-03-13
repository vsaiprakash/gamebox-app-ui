import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSelectedComponent } from './game-selected.component';

describe('GameSelectedComponent', () => {
  let component: GameSelectedComponent;
  let fixture: ComponentFixture<GameSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
