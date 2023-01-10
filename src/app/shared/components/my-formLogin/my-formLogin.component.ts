import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  registerForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
  });

  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Student | null
  ) {
    if (data) {
      this.registerForm.patchValue(data);
    }
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
