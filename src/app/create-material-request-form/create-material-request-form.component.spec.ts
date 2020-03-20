import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaterialRequestFormComponent } from './create-material-request-form.component';

describe('CreateMaterialRequestFormComponent', () => {
  let component: CreateMaterialRequestFormComponent;
  let fixture: ComponentFixture<CreateMaterialRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMaterialRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaterialRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
