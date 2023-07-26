import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTowarowComponent } from './lista-towarow.component';

describe('ListaTowarowComponent', () => {
  let component: ListaTowarowComponent;
  let fixture: ComponentFixture<ListaTowarowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTowarowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTowarowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
