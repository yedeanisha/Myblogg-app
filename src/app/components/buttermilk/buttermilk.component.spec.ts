import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtermilkComponent } from './buttermilk.component';

describe('ButtermilkComponent', () => {
  let component: ButtermilkComponent;
  let fixture: ComponentFixture<ButtermilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtermilkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtermilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
