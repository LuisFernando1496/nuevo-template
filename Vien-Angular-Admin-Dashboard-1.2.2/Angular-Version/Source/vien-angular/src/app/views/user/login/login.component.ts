import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm;
  nickNameModel = '';
  passwordModel = '';

  buttonDisabled = false;
  buttonState = '';

  constructor(private authService: AuthService, private notifications: NotificationsService, private router: Router) { }


  onSubmit() {
    if (this.loginForm.valid) {
      // if (this.buttonDisabled) {
      console.log("EMNTRO");

      this.buttonDisabled = true;
      this.buttonState = 'show-spinner';
      this.authService.signIn(this.loginForm.value).pipe(timeout(10000)).subscribe(
        (response) => {
          if (response['status_code'] == 200) {
            console.log(response)
            localStorage.setItem("token", 'Bearer ' + response['token']);
            localStorage.setItem("username", response['data']['username']);
            localStorage.setItem("currentUserID", response['data']['id']);
            localStorage.setItem("name", response['data']['name']);
            localStorage.setItem("last_name", response['data']['last_name']);
            localStorage.setItem("rol", response['data']['rol']['name']);
            localStorage.setItem("rol_id", response['data']['rol']['id']);
            this.router.navigate([environment.adminRoot]).then(() => {
              window.location.reload()
            });
          } else {
            this.buttonDisabled = false;
            this.buttonState = '';
            this.notifications.create('Error', response['message'], NotificationType.Bare, {
              theClass: 'outline primary',
              timeOut: 6000,
              showProgressBar: false
            });
          }
        },
        (error) => {
          this.buttonDisabled = false;
          this.buttonState = '';
          this.notifications.create('Error', error.message, NotificationType.Bare, {
            theClass: 'outline primary',
            timeOut: 6000,
            showProgressBar: false
          });
        }
      )
      // this.authService.signIn(this.loginForm.value).then(() => {
      //   this.router.navigate([environment.adminRoot]);
      // }).catch((error) => {
      //   this.buttonDisabled = false;
      //   this.buttonState = '';
      //   this.notifications.create('Error', error.message, NotificationType.Bare, {
      //     theClass: 'outline primary',
      //     timeOut: 6000,
      //     showProgressBar: false
      //   });
      // });
      // }
    }
  }
}
