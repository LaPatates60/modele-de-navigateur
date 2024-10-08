import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoHomeComponent } from './go-home.component';

describe('GoHomeComponent', () => {
  let component: GoHomeComponent;
  let fixture: ComponentFixture<GoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
