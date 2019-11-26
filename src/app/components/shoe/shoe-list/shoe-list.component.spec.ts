import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeListComponent } from './shoe-list.component';

describe('ShoeListComponent', () => {
  let component: ShoeListComponent;
  let fixture: ComponentFixture<ShoeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
