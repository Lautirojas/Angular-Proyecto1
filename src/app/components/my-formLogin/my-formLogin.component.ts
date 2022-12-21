import { DialogRef } from '@angular/cdk/dialog';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Student } from 'src/app/models/student.model';

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
  // email = new FormControl('', [Validators.email, Validators.required]);
  // password = new FormControl('', [
  //   Validators.minLength(6),
  //   Validators.required,
  // ]);
  // repeatPassword = new FormControl('', [
  //   Validators.minLength(6),
  //   Validators.required,
  // ]);

  registerForm = new FormGroup(
    {
      firstName: this.firstName,
      lastName: this.lastName,
      // email: this.email,
      // password: this.password,
      // repeatPassword: this.repeatPassword,
    }
    // {
    //   validators: [this.passwordMatchesValidator],
    // }
  );
  // passwordMatchesValidator() {
  //   let passwordMatch: boolean;
  //   return () => {
  //     if (this.password.value === this.repeatPassword.value) {
  //       passwordMatch = true;
  //       console.log('passsword match :', passwordMatch);
  //     } else {
  //       passwordMatch = false;
  //       return console.log('passsword match :', passwordMatch);
  //     }
  //   };
  // }

  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Student | null
  ) {
    console.log(data);
    if (data) {
      this.registerForm.patchValue(data);
    }
  }

  close() {
    this.dialogRef.close();
  }

  // public alumnos : Alumno
  // constructor(){
  //   this.boton = [
  //     {}
  //   ]
  // }

  ngOnInit() {}
}
