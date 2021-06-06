import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any = {
    name: '',
    surname: '',
    email: '',
  }

  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormValidate(): void {
    console.log(this.registerForm);

    // validate name
    // validate surname
    // validate email

    // if something not ok - show error message
  }

}
