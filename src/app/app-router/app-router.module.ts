import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LogoutComponent} from '../app-auth/logout/logout.component';

const routes: Routes = [
  { path: 'login', loadChildren: '../app-auth/app-auth.module#AppAuthModule' },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LogoutComponent
  ]
})
export class AppRouterModule { }
