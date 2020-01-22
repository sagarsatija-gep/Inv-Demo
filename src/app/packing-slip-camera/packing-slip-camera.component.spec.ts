import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingSlipCameraComponent } from './packing-slip-camera.component';

describe('PackingSlipCameraComponent', () => {
  let component: PackingSlipCameraComponent;
  let fixture: ComponentFixture<PackingSlipCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingSlipCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingSlipCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
