import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KokoroSearcherComponent } from './kokoro-searcher.component';

describe('KokoroSearcherComponent', () => {
  let component: KokoroSearcherComponent;
  let fixture: ComponentFixture<KokoroSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KokoroSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KokoroSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
