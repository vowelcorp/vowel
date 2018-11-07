import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderComponent } from './leader.component';

describe('LeaderComponent', () => {
  let component: LeaderComponent;
  let fixture: ComponentFixture<LeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'vowel'`, () => {
    fixture = TestBed.createComponent(LeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('vowel');
  });

  it('should render title in a h1 tag', () => {
    fixture = TestBed.createComponent(LeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to vowel!');
  });

});
