
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';

  import { RouterTestingModule } from '@angular/router/testing';

import { ChinesedetailsComponent } from './chinesedetails.component';

describe('ChinesedetailsComponent', () => {
  let component: ChinesedetailsComponent;
  let fixture: ComponentFixture<ChinesedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ChinesedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinesedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
