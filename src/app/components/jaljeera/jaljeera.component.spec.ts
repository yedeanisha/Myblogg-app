import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaljeeraComponent } from './jaljeera.component';

describe('JaljeeraComponent', () => {
  let component: JaljeeraComponent;
  let fixture: ComponentFixture<JaljeeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaljeeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaljeeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
