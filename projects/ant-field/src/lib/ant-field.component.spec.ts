import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntFieldComponent } from './ant-field.component';

describe('AntFieldComponent', () => {
  let component: AntFieldComponent;
  let fixture: ComponentFixture<AntFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
