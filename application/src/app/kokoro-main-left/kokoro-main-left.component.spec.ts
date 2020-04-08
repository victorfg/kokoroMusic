import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KokoroMainLeftComponent } from './kokoro-main-left.component';

describe('KokoroMainLeftComponent', () => {
  let component: KokoroMainLeftComponent;
  let fixture: ComponentFixture<KokoroMainLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KokoroMainLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KokoroMainLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
