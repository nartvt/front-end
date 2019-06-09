import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3CSidebarComponent } from './baitap3-csidebar.component';

describe('Baitap3CSidebarComponent', () => {
  let component: Baitap3CSidebarComponent;
  let fixture: ComponentFixture<Baitap3CSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3CSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3CSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
