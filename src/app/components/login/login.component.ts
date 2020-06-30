import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioLogin } from '../../models/usuario_model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioLogin = new UsuarioLogin();
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  login(form: NgForm) {
    if(form.invalid) {
      console.log('GG');
      return;
    }
    console.log(form);
    this.router.navigateByUrl('/menu');
    console.log('llego');
  }
}
