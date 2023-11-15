import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {GoogleAuthProvider} from 'firebase/auth';
import { FacebookAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afs: AngularFireAuth, private router: Router) { }

  signInWithGoogle(){
    return this.afs.signInWithPopup(new GoogleAuthProvider());
  }

  signInWithFacebook(){
    return this.afs.signInWithPopup(new FacebookAuthProvider());
  }

  registerWithEmailAndPassword(user: {email: string, password: string}){
    return this.afs.createUserWithEmailAndPassword(user.email, user.password);
  }

  signWithEmailAndPassword(user: {email: string, password: string}){
    return this.afs.signInWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    this.router.navigateByUrl("/");
  }

  register(data: any) {
    const local = localStorage.getItem("users");
    if (local) {
      const localJSON = JSON.parse(local);
      localJSON.push(data);

      localStorage.setItem("users", JSON.stringify(localJSON));
    } else {
      const new_data = [];
      new_data.push(data)
      localStorage.setItem("users", JSON.stringify(new_data));

    }
  }

  login(data: any) {
    const local = localStorage.getItem("users");
    if (local) {
      const localJSON = JSON.parse(local);
      
      for (let i = 0; i < localJSON.length; i++) {
        
        if (localJSON[i].email === data.email && localJSON[i].password === data.password) {
          return true; 
        }
        
      }
    }

    return false
  }
}
