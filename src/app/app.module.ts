import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'primeng/api';
import { environment} from 'src/environments/environment';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { CardModule } from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { HomeComponent } from './home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCyCLL9Kuq_pNAd_nQFJ88jDYeW9ajGrI4",
      authDomain: "gestiondepense-20f1b.firebaseapp.com",
      projectId: "gestiondepense-20f1b",
      storageBucket: "gestiondepense-20f1b.appspot.com",
      messagingSenderId: "130864549136",
      appId: "1:130864549136:web:49405ac846b424ad0da995"
    }
     
  ),
    CardModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
