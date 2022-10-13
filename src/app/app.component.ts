import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup = new FormGroup({
    emailInput: new FormControl('', Validators.required),
    passwordInput: new FormControl('', Validators.required),
  });

  // inputEmailChanged$ = new BehaviorSubject('');
  // inputPasswordChanged$ = new BehaviorSubject('');
  // buttonDisabled$: Observable<boolean> = combineLatest(
  //   this.inputEmailChanged$,
  //   this.inputPasswordChanged$
  // ).pipe(
  //   map(([email, passwd]) => {
  //     return email === ''|| passwd === '';
  //   })
  // );

  // onEmailChange(event: Event){
  //   const value = (event.target as HTMLInputElement).value;
  //   this.inputEmailChanged$.next(value);
  //   this.inputEmailChanged$.subscribe(console.log);
  // }

  // onPasswordChange(event: Event){
  //   const value = (event.target as HTMLInputElement).value;
  //   this.inputPasswordChanged$.next(value);
  //   this.inputPasswordChanged$.subscribe(console.log);
  // }
}
