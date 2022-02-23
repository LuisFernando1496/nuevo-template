import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoSelectComponent } from './grupo-select.component';

describe('GrupoSelectComponent', () => {
  let component: GrupoSelectComponent;
  let fixture: ComponentFixture<GrupoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
