import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlyerComponent } from './plyer.component';

describe('PlyerComponent', () => {
  let component: PlyerComponent;
  let fixture: ComponentFixture<PlyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
