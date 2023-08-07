import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './auth.service';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public authService: AuthService, public router: Router, private messageService: MessageService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean> | UrlTree | boolean {

    return this.authService.userSubject.pipe(
      // Take 1 value from the observable and then immediately unsubscribe
      // to avoid rerunning the logic in the guard unneccesarily
      take(1),
      map((user) => {
        const isAuthenticated = !!user;
        if (isAuthenticated) {
          return true;
        }
        this.messageService.add({ severity: 'info', summary: 'Access Denied', detail: 'Login is Required to Access This Page!' });

        return this.router.createUrlTree(['/login']);
      })
    );
  }
}