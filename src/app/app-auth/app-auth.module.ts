import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { AppAuthComponent } from './app-auth/app-auth.component';
import {fakeBackendProvider} from '../utils/helper';
import {UserService} from '../app-services/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogoutComponent, AppAuthComponent],
  providers: [
    UserService,
    // api backend simulation
    fakeBackendProvider
  ]
})
export class AppAuthModule { }
