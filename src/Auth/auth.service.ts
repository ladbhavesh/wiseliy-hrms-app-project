import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router,) { }

  // login method
  login(email: string, password: string) {
    debugger
    this.fireauth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('token', 'true');
      alert('Login Successful.');
      // this.router.navigate(['/dashboard'])
      this.router.navigateByUrl('dashboard')
      // if (res.user?.emailVerified == true) {
      //   this.router.navigate(['/dashboard'])

      // } else {
      //   this.router.navigate(['/varify-email']);
      // }

    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  //register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(res => {
      alert('Registration Successful.');
      this.router.navigate(['/login']);
      this.sendEmailForVarification(res.user);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  //sign out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  //forgot password
  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/varify-email']);
    }, err => {
      alert('Something went wrong');
    })
  }

  //varify-email
  sendEmailForVarification(user: any) {
    user.sendEmailForVarification().then((res: any) => {
      this.router.navigate(['/varify-email']);
    }, (err: any) => {
      alert('Somthing wend wrong.Not able to send mail to your email.')
    })
  }

  //varify-gmail/ Sign in with Google
  googleSignIn() {
    debugger
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid));
    }, err => {
      alert(err.message);
    })
  }
}
