import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@vwShared/shared.module';
import { AppShellModule } from '@vwApp/app-shell/app-shell.module';
import { NotFoundModule } from '@vwApp/not-found/not-found.module';
import { LeaderModule } from '@vwApp/leader/leader.module';

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
