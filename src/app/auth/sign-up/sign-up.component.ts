import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
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
}
