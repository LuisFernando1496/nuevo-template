import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:any;
  docente:boolean = true;
  estudiante:boolean = true;
  administrativo:boolean = true;

  constructor(private service: AuthService)
  {

  }

  ngOnInit(): void {
    this.getUser();
  }

  async getUser()
  {
    await this.service.principal('user/profile/').subscribe(data => {
      console.log(data);
      var usuario = data['user'];
      switch (usuario['rol_id']) {
        case 1:
          this.docente = false;
          this.estudiante = false;
          break;
        case 2:
          this.administrativo = false;
          this.estudiante = false;
          break;
        case 3:
          this.docente = false;
          this.administrativo = false;
          break;
      }
      this.user = {
        id: usuario['id'],
        name: usuario['name'],
        last_name: usuario['last_name'],
        email: usuario['email'],
        username: usuario['username'],
        city: usuario['city'],
        state: usuario['state'],
        country: usuario['country']
      };
      console.log(this.user);

    });
  }

}
