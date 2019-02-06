import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashComponent } from './dash.component';

describe('DashComponent', () => {

  it(`should have as title 'dash'`, async(() => {
    fixture = TestBed.createComponent(DashComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('dash');
  }));

  let component: DashComponent;
  let fixture: ComponentFixture<DashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
