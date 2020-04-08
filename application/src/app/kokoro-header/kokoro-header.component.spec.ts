import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KokoroHeaderComponent } from './kokoro-header.component';

describe('KokoroHeaderComponent', () => {
  let component: KokoroHeaderComponent;
  let fixture: ComponentFixture<KokoroHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KokoroHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KokoroHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
