import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMapDashboardComponent } from './inventory-map-dashboard.component';

describe('InventoryMapDashboardComponent', () => {
  let component: InventoryMapDashboardComponent;
  let fixture: ComponentFixture<InventoryMapDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryMapDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMapDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
