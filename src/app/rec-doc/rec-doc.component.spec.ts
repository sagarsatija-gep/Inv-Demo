import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecDocComponent } from './rec-doc.component';

describe('RecDocComponent', () => {
  let component: RecDocComponent;
  let fixture: ComponentFixture<RecDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
