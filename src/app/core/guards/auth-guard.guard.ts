import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      // if (this.loginService.isUserLoggedIn()) {
      //   //check the user's role is Admin or not
      //   if(this.loginService.getCurrentUserDetailsValue().role=="admin"){
      //     return true;
      //   }
      //   //no need to redirect to login page as user is already logged in
      //   return false;
      // } else {
      //   //not logged in
      //   //or not admin
      //   this.router.navigate(['/login']);
      //   return false;
      // }

      return true;
  }
  
}
