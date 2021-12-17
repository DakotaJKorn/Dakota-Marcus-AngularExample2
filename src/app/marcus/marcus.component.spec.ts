import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcusComponent } from './marcus.component';

describe('MarcusComponent', () => {
  let component: MarcusComponent;
  let fixture: ComponentFixture<MarcusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
