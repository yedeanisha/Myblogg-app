import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkishComponent } from './turkish.component';

describe('TurkishComponent', () => {
  let component: TurkishComponent;
  let fixture: ComponentFixture<TurkishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurkishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
