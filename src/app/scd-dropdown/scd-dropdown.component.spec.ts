import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScdDropdownComponent } from './scd-dropdown.component';

describe('ScdDropdownComponent', () => {
  let component: ScdDropdownComponent;
  let fixture: ComponentFixture<ScdDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScdDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScdDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
