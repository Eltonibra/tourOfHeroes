import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDatailComponent } from './hero-datail.component';

describe('HeroDatailComponent', () => {
  let component: HeroDatailComponent;
  let fixture: ComponentFixture<HeroDatailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDatailComponent]
    });
    fixture = TestBed.createComponent(HeroDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
