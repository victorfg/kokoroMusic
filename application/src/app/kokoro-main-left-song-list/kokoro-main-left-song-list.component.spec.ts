import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KokoroMainLeftSongListComponent } from './kokoro-main-left-song-list.component';

describe('KokoroMainLeftSongListComponent', () => {
  let component: KokoroMainLeftSongListComponent;
  let fixture: ComponentFixture<KokoroMainLeftSongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KokoroMainLeftSongListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KokoroMainLeftSongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
