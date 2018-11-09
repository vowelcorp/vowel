import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppShellComponent } from './app-shell.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';

describe('AppShellComponent', () => {
  let component: AppShellComponent;
  let fixture: ComponentFixture<AppShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppShellComponent ],
      imports: [ RouterTestingModule, MatToolbarModule, MatMenuModule, MatIconModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app-shell', () => {
    expect(component).toBeTruthy();
  });
});
