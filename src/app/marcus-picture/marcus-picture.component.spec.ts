import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcusPictureComponent } from './marcus-picture.component';

describe('MarcusPictureComponent', () => {
  let component: MarcusPictureComponent;
  let fixture: ComponentFixture<MarcusPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcusPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcusPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
