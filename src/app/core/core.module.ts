import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@vwShared/shared.module';
import { AppShellModule } from '../app-shell/app-shell.module';
import { NotFoundModule } from '../not-found/not-found.module';
import { LeaderModule } from '../leader/leader.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppShellModule,
    NotFoundModule,
    LeaderModule
  ],
  declarations: []
})
export class CoreModule { }
