import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  password2: any;
  status = {
    errors: {
      password: false,
      valid: false
    }
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
    console.log(f.valid);
    
    this.status.errors.password = false;
    this.status.errors.valid = false;


    if (f.valid) {
      if (f.value.password !== f.value.password2) {
        this.status.errors.password = true;
      } else {
  
        this.authService.register(f.value);
  
        this.router.navigateByUrl("/");
      }
    } else {
      this.status.errors.valid = true;

    }
    
  }
}
