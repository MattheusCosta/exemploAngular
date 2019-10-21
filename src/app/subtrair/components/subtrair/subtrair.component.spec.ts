import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtrairComponent } from './subtrair.component';

describe('SubtrairComponent', () => {
  let component: SubtrairComponent;
  let fixture: ComponentFixture<SubtrairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtrairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtrairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
