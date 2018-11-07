import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderRoutingModule } from './leader-routing.module';
import { LeaderComponent } from './leader.component';
import { SharedModule } from '@vwShared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LeaderRoutingModule,
    SharedModule
  ],
  declarations: [LeaderComponent]
})
export class LeaderModule { }
