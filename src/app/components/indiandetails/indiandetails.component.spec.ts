
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';

  import { RouterTestingModule } from '@angular/router/testing';
import { IndiandetailsComponent } from './indiandetails.component';

describe('IndiandetailsComponent', () => {
  let component: IndiandetailsComponent;
  let fixture: ComponentFixture<IndiandetailsComponent>;

 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ IndiandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
