import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseService } from './use-service';

describe('UseService', () => {
  let component: UseService;
  let fixture: ComponentFixture<UseService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
