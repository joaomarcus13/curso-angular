import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  msgError!: string

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){}
  ngOnInit(): void {
    console.log(this.msgError)
  }

  submitForm(){
    if(this.formAuth.valid){
      this.authService.signin(this.formAuth.value).subscribe({
        next: (res)=>res,
        error: e=>e
      })
    }
  }
}
