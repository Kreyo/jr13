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
  successMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormValidate(): void {
    const { name, surname, email } = this.registerForm;
    if (!name || !surname || !email) {
      this.errorMessage = 'All fields are required!';
      return;
    }
    if (name.length < 2) {
      this.errorMessage = 'Name must be at least 2 characters long!';
      return;
    }
    if (surname.length < 2) {
      this.errorMessage = 'Surname must be at least 2 characters long!';
      return;
    }
    if (email.length < 3) {
      this.errorMessage = 'Email must be at least 3 characters long!';
      return;
    }
    if (!email.includes('@')) {
      this.errorMessage = 'Email must contain an @ character!';
      return;
    }

    this.errorMessage = '';
    this.successMessage = 'Registration success!';

    // fetch('https://localhost/api/register', {
    //   method: 'POST',
    //   body: this.registerForm,
    // })
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(e => console.error(e));
  }

}
