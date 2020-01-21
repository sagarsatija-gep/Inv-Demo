import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingSlipsTabComponent } from './packing-slips-tab.component';

describe('PackingSlipsTabComponent', () => {
  let component: PackingSlipsTabComponent;
  let fixture: ComponentFixture<PackingSlipsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingSlipsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingSlipsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
