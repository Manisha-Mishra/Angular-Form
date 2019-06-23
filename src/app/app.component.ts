import { Component, ElementRef, ViewChild } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  @ViewChild('f', {static: true}) signUpForm: NgForm;
  submitted = false;
    showUsrNm = false;
  defaultsecques = 'teacher';
  answer = '';
  genders = ['male' , 'female'];
  User = {
    username: '',
    email: '',
    secret: '',
    questionanswer: '',
    gender: ''


  };
  // usrnmSelected() {
  //   this.showUsrNm = true;
  //   console.log(this.username);

  // }
  usrnmselected() {

  }
  // onSubmitted(f: ElementRef) {
  //   console.log(f);
  // }
  // onSubmitted(f: NgForm) {
  //   console.log(f);
  // }
  onSubmitted() {
    this.submitted = true;
    this.User.username = this.signUpForm.value.userData.name;
    this.User.email = this.signUpForm.value.userData.email;
    this.User.secret = this.signUpForm.value.secret;
    this.User.questionanswer = this.signUpForm.value.questionanswer;
    this.User.gender = this.signUpForm.value.gender;


  }
}
