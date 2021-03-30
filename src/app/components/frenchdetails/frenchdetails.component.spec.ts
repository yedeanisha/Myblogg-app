
import { FrenchdetailsComponent } from './frenchdetails.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';


describe('FrenchdetailsComponent', () => {
  let component: FrenchdetailsComponent;
  let fixture: ComponentFixture<FrenchdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ FrenchdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
