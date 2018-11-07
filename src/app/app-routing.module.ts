import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppShellComponent } from '@vwApp/app-shell/app-shell.component';
import { LeaderComponent } from '@vwApp/leader/leader.component';
import { NotFoundComponent } from '@vwApp/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'leader', pathMatch: 'full' },
  { path: 'leader', component: LeaderComponent },
  { path: 'featured', component: AppShellComponent,
    children: [

    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
