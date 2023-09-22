import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FullStack.UI';
  constructor(
    private authService : AuthService,
    private router : Router,
    ){}

  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }
}
