import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { IRegister } from '../../models/iregister';
import { UserService } from '../../services/user/user.service';
import { IResponse } from '../../models/iresponse';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  userRegisterForm: FormGroup;
  response: IResponse = {} as IResponse;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userRegisterForm = fb.group(
      {
        firstName: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z]{3,}')],
        ],
        lastName: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z]{3,}')],
        ],
        userName: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z0-9]{3,}')],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern('[0-9]{11}')],
        ],
      },

      { validators: [this.passwordMatchValidator, this.userNameValidator] }
    );
  }

  ngOnInit(): void {}

  submit() {
    let userRegister: IRegister = this.userRegisterForm.value;
    console.log(userRegister);

    this.userService.Register(userRegister).subscribe({
      next: (v) => {
        this.response = v as IResponse;
        console.log(this.response);
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete'),
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }

  userNameValidator(form: FormGroup) {
    const username = form.get('userName')?.value;

    let userExist: boolean = false;
    this?.userService.CheckIfUserNameExist(username).subscribe({
      next: (v) => {
        this.response = v as IResponse;

        console.log(this.response.success);
        userExist = false;
      },
      error: (e) => {
        console.log(e);
        userExist = true;
      },
      complete: () => console.log('complete'),
    });
    if (userExist) {
      form.get('userName')?.setErrors({ userExists: true });
    } else {
      form.get('userName')?.setErrors({ userExists: null });
    }
  }

  get firstName() {
    return this.userRegisterForm.get('firstName');
  }
  get lastName() {
    return this.userRegisterForm.get('lastName');
  }
  get userName() {
    return this.userRegisterForm.get('userName');
  }
  get email() {
    return this.userRegisterForm.get('email');
  }
  get phoneNumber() {
    return this.userRegisterForm.get('phoneNumber');
  }

  get password() {
    return this.userRegisterForm.get('password');
  }

  get confirmPassword() {
    return this.userRegisterForm.get('confirmPassword');
  }
}
