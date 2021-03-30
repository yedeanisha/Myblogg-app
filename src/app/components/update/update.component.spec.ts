
import { async, ComponentFixture, TestBed } from '@angular/core/testing';  
  import { RouterTestingModule } from '@angular/router/testing';
  import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'update'`, () => {
    const fixture = TestBed.createComponent(UpdateComponent);
    const Update = fixture.componentInstance;
    expect(Update.title).toEqual('update');
  });
 
});
