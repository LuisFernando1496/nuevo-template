import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  /**
  * Constructor
  */
  constructor(
    private router: Router
  ) { }

  /**
   * Se puede activar la ruta si existe un token guardado.
   */
  canActivate() {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['user/login']);
      return false;
    }

    return true;
  }

}
