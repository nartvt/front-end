import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1SidebarComponent } from './baitap1-sidebar.component';

describe('Baitap1SidebarComponent', () => {
  let component: Baitap1SidebarComponent;
  let fixture: ComponentFixture<Baitap1SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
