import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { StorageService } from '../../../core/services/storage.service';
import { LoginRequest } from '../../../core/models/auth.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html'
})
export class Login {

  private readonly authService = inject(AuthService);
  private readonly storageService = inject(StorageService);
  private readonly router = inject(Router);

  loginData: LoginRequest = {
    email: '',
    password: ''
  };

  loading = false;
  errorMessage = '';

  login(): void {

    if (!this.loginData.email || !this.loginData.password) {
      this.errorMessage = 'Email and password are required.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.login(this.loginData).subscribe({
      next: (response) => {

        this.storageService.setToken(response.token);

        this.router.navigate(['/dashboard']);

      },

      error: (error) => {

        this.loading = false;

        this.errorMessage =
          error?.error?.message || 'Invalid email or password.';
      },

      complete: () => {
        this.loading = false;
      }
    });
  }
}