import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEasy } from './signal-easy';

describe('SignalEasy', () => {
  let component: SignalEasy;
  let fixture: ComponentFixture<SignalEasy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEasy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEasy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
