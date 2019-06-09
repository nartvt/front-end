import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1ContentComponent } from './baitap1-content.component';

describe('Baitap1ContentComponent', () => {
  let component: Baitap1ContentComponent;
  let fixture: ComponentFixture<Baitap1ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
