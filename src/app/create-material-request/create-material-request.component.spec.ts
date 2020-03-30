import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaterialRequestComponent } from './create-material-request.component';

describe('CreateMaterialRequestComponent', () => {
  let component: CreateMaterialRequestComponent;
  let fixture: ComponentFixture<CreateMaterialRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMaterialRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaterialRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
