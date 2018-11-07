import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LeaderComponent } from './leader/leader.component';

const routes: Routes = [
  { path: '', component: AppShellComponent,
    children: [

    ]
  },
  { path: 'leader', component: LeaderComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
