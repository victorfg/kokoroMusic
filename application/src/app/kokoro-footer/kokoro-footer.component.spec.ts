import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KokoroFooterComponent } from './kokoro-footer.component';

describe('KokoroFooterComponent', () => {
  let component: KokoroFooterComponent;
  let fixture: ComponentFixture<KokoroFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KokoroFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KokoroFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
