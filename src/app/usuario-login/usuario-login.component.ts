import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent {


  loginUsuario!:FormGroup;


  ngOnInit(): void {
    this.loginUsuario = this.InitForm();
  }

  constructor(private router: Router, 
    private fb: FormBuilder, 
    private loginService: LoginService
    , private activatedRoute: ActivatedRoute
    ) {
 
  }

  OnSubmit(){
    var responseBody = {
      password: this.loginUsuario.get('password')?.value,
      username: this.loginUsuario.get('email')?.value
    }

    this.loginService.login(responseBody).subscribe({
      next: () => { this.router.navigate(['/dashboard'])}
    })

    

    
  }

  InitForm():FormGroup{
    return this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  
}
