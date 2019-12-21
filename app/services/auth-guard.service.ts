import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  roleList = [];
  roles: string;

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    this.roleList = [];
    if (currentUser) {
      currentUser.authorities.forEach(role => {
        if (route.data.roles == role.authority) {
          this.roleList.push(role.authority);
          return false;
        } 
      });
      this.roles = this.roleList.toString();
      if (route.data.roles && route.data.roles.indexOf(this.roles) === -1) {
        this.router.navigate(['/price']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
