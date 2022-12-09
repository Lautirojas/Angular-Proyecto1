import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-my-formLogin',
  templateUrl: './my-formLogin.component.html',
  styleUrls: ['./my-formLogin.component.css'],
})
export class MyFormLoginComponent implements OnInit {
  firstName = new FormControl('', [
    Validators.minLength(3),
    Validators.required,
  ]);
  lastName = new FormControl('', [
    Validators.minLength(3),
    Validators.required,
  ]);
  email = new FormControl('', [Validators.email, Validators.required]);
  password = new FormControl('', [
    Validators.minLength(6),
    Validators.required,
  ]);
  repeatPassword = new FormControl('', [
    Validators.minLength(6),
    Validators.required,
  ]);

  registerForm = new FormGroup(
    {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      password: this.password,
      repeatPassword: this.repeatPassword,
    },
    {
      validators: [this.passwordMatchesValidator],
    }
  );
  passwordMatchesValidator() {
    return () => {
      if (this.password.value !== this.repeatPassword.value) {
        return {
          passwordMatch: false,
        };
      }
      return null;
    };
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  ngOnInit() {}
}
