import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@vwShared/shared.module';
import { AppShellRoutingModule } from './app-shell-routing.module';
import { AppShellComponent } from './app-shell.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppShellRoutingModule
  ],
  declarations: [AppShellComponent]
})
export class AppShellModule { }
