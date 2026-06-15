import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInChild } from './child-in-child';

describe('ChildInChild', () => {
  let component: ChildInChild;
  let fixture: ComponentFixture<ChildInChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildInChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildInChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
