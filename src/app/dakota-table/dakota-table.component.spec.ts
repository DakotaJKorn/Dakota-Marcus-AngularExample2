import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DakotaTableComponent } from './dakota-table.component';

describe('DakotaTableComponent', () => {
  let component: DakotaTableComponent;
  let fixture: ComponentFixture<DakotaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DakotaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DakotaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
