import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KokoroMainRightComponent } from './kokoro-main-right.component';

describe('KokoroMainRightComponent', () => {
  let component: KokoroMainRightComponent;
  let fixture: ComponentFixture<KokoroMainRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KokoroMainRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KokoroMainRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
