import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('userForm') userForm: NgForm;
  @ViewChild('docenteForm') docenteForm: NgForm;

  nameModel = '';
  lastNameModel = '';
  usernameModel = '';
  emailModel = '';
  passwordModel = '';
  confirmPasswordModel = '';
  rfcModel = '';
  curpModel = '';
  genderModel = '';
  cedulaModel = '';
  bankModel = '';
  clabeModel = '';
  accountModel = '';
  dateModel = '';
  user:any;
  docente:boolean = true;
  estudiante:boolean = true;
  administrativo:boolean = true;
  edicion:boolean = false;
  formulario: FormGroup;

  constructor(private service: AuthService, private form: FormBuilder, private notifications: NotificationsService)
  {
    this.formulario = this.form.group({
      name: [''],
      last_name: [''],
      username: [''],
      email: [''],
      password: [''],
      confirm_password: [''],
      rfc: [''],
      curp: [''],
      gender: [''],
      cedula: [''],
      bank: [''],
      bill: [''],
      account: [''],
      date: ['']
    });
  }

  ngOnInit(): void {
    this.getUser();
    console.log(this.edicion);

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

      this.nameModel = this.user.name;
      this.lastNameModel = this.user.last_name;
      this.usernameModel = this.user.username;
      this.emailModel = this.user.email;
      this.rfcModel = this.user.teachers['rfc'];
      this.curpModel = this.user.teachers['curp'];
      this.cedulaModel = this.user.teachers['cedula'];
      this.genderModel = this.user.teachers['gender'];
      this.bankModel = this.user.teachers['bank'];
      this.clabeModel = this.user.teachers['bill'];
      this.accountModel = this.user.teachers['account'];
      this.dateModel = this.user.teachers['date'];
    });
  }

  edicionF()
  {
    this.edicion = !this.edicion;
  }

  async actualizar()
  {
    if (this.passwordModel != null) {
      this.formulario.patchValue({
        name: this.nameModel,
        last_name: this.lastNameModel,
        username: this.usernameModel,
        email: this.emailModel,
        rfc: this.rfcModel,
        curp: this.curpModel,
        gender: this.genderModel,
        cedula: this.cedulaModel,
        bank: this.bankModel,
        bill: this.clabeModel,
        account: this.accountModel,
        date: this.dateModel
      });
    } else {
      if (this.passwordModel != this.confirmPasswordModel) {
        this.notifications.error("Sin coincidencia","Las contraseñas ingresadas no coinciden",{
          timeOut: 30000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false
        })
      } else {
        this.formulario.patchValue({
          name: this.nameModel,
          last_name: this.lastNameModel,
          username: this.usernameModel,
          email: this.emailModel,
          password: this.passwordModel,
          rfc: this.rfcModel,
          curp: this.curpModel,
          gender: this.genderModel,
          cedula: this.cedulaModel,
          bank: this.bankModel,
          bill: this.clabeModel,
          account: this.accountModel,
          date: this.dateModel
        });
      }
    }


    this.service.updateProfile('user',this.formulario).subscribe(data => {
      let status = data['status_code'];
      let message = data['message'];
      if (status != 200) {
        this.notifications.error('Error ' + status,message,
        {
          timeOut: 30000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false
        });
      } else {
        this.notifications.success('Actualizado',message,
        {
          timeOut: 30000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false
        });
      }
    });

  }



}
