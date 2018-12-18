import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private authService: AuthService) { }

  canActivate() {
    return this.authService.inAuthenticated();
  }

  canLoad(){
    return this.authService.inAuthenticated();
  }

}
