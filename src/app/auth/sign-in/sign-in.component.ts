import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{

  loginForm : FormGroup = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  status = {
    error: false
  };
  constructor(private authService: AuthService,private router: Router){}

  ngOnInit(): void {
    
  }

  loginWithGoogle(){
    this.authService.signInWithGoogle().then((res: any) =>{
      this.router.navigateByUrl('/home');
    }).catch((error: any) =>[
      console.error(error)
    ]);
  }

  loginWithFacebook(){
    this.authService.signInWithFacebook().then((res: any) =>{
      this.router.navigateByUrl('/home');
    }).catch((error: any) =>[
      console.error(error)
    ]);
  }


  onSubmit(f: NgForm) {
    console.log(f.value);
    this.status.error = false;

    const res = this.authService.login(f.value);
    console.log(res);

    if (res) {
      this.router.navigateByUrl("/home");
    } else {
      this.status.error = true;
    }
    
  }
}
