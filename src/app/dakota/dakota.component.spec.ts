import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DakotaComponent } from './dakota.component';

describe('DakotaComponent', () => {
  let component: DakotaComponent;
  let fixture: ComponentFixture<DakotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DakotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DakotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
