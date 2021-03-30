import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorocanComponent } from './morocan.component';

describe('MorocanComponent', () => {
  let component: MorocanComponent;
  let fixture: ComponentFixture<MorocanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorocanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorocanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
