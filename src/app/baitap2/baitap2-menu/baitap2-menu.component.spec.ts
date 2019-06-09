import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2MenuComponent } from './baitap2-menu.component';

describe('Baitap2MenuComponent', () => {
  let component: Baitap2MenuComponent;
  let fixture: ComponentFixture<Baitap2MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
