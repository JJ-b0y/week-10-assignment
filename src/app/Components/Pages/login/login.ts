import { Component, signal } from '@angular/core';
import { ILogin } from '../../../Interface/loginInterface';
import { email, form, maxLength, minLength, PathKind, required, SchemaPathTree, FormField } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../Services/LoginService/login-service';
import { BackgroundColorService } from '../../../Services/BackgroundColorService/background-color-service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormField, RouterLink, NgStyle],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(
    private backgroundColorService: BackgroundColorService,
    private loginService: LoginService
  ) {}

  backgroundColor: string = '';

  isBlackBackground: boolean = false;

  ngOnInit(): void {
    // Subject
    // this.backgroundColorService.$selectedBgColor.subscribe({
    //   next:(value) => {
    //     console.log(`I have received the value: "${value}" from the Subject`)
    //     this.backgroundColor = value;
    //     if (this.backgroundColor === "black") {
    //       this.isBlackBackground = true;
    //     } else {
    //       this.isBlackBackground = false;
    //     }
    //   },
    //   error:(err) => {
    //     console.error("Failed to receive value: ", err);
    //   },
    // });

    // Behavior Subject
    this.backgroundColorService.$selectedBGColorBehaviorSubject.subscribe({
      next:(value) => {
        console.log(`I have received the value: "${value}" from the Behavior Subject`)
        this.backgroundColor = value;
        if (this.backgroundColor === "black") {
          this.isBlackBackground = true;
        } else {
          this.isBlackBackground = false;
        }
      },
      error:(err) => {
        console.error("Failed to receive value: ", err);
      },
    });
  }

  loginModel = signal<ILogin>({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel, this.formValidations);

  formValidations(schemaPath: SchemaPathTree<ILogin, PathKind.Root>) {
    required(schemaPath.email, { message: "Email is required" });
    required(schemaPath.password, { message: "Password is required" });
    email(schemaPath.email, { message: "Email is Invalid" });
    minLength(schemaPath.password, 8, { message: "Password must be at least 8 characters" });
    maxLength(schemaPath.password, 12, { message: "Password must be at most 12 characters" });
  }

  // Login Using Promise
  loginUsingPromise(e: Event) {
    e.preventDefault();
    this.loginService.loginPromise(this.loginModel())
    .then((result) => {
      console.log("Promise Login Successful");
    })
    .catch((err) => {
      console.error("Promise Login Failed: ", err)
    })
    .finally(() => {
      console.log("Finished Running Promise Login Attempt.")
    });
  }

  // Login Using Observable
  loginUsingObservable(e: Event) {
    e.preventDefault();
    this.loginService.loginObservable(this.loginModel())
    .subscribe({
      next: value => {
        console.log("Observable Login Successful");
      },
      error: (err) => {
        console.error("Observable Login Failed: ", err)
      },
      complete() {
        console.log("Finished Running Observable Login Attempt.");
      }
    });
  }
}
