import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { logout } from '../../auth/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  profileIsVisible: boolean = true;
  user: any = {};

  constructor() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = undefined;
      }
    });
  }

  toggleProfileVisibility: any = () => {
    this.profileIsVisible = !this.profileIsVisible;
  };

  logout: any = () => {
    logout();
  };
}
