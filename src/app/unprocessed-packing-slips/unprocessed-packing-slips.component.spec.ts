import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprocessedPackingSlipsComponent } from './unprocessed-packing-slips.component';

describe('UnprocessedPackingSlipsComponent', () => {
  let component: UnprocessedPackingSlipsComponent;
  let fixture: ComponentFixture<UnprocessedPackingSlipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnprocessedPackingSlipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprocessedPackingSlipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
