import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlyersComponent } from './plyers.component';

describe('PlyersComponent', () => {
  let component: PlyersComponent;
  let fixture: ComponentFixture<PlyersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlyersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
